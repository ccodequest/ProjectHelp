'use client';

import React, { useState, useEffect } from 'react';
import { getAllOrders, exportOrdersAsJson, clearAllOrders, updateOrderStatus } from '@/lib/order-storage';
import { Download, Trash2, RefreshCw, Eye } from 'lucide-react';
import Link from 'next/link';

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [refreshCount, setRefreshCount] = useState(0);

  useEffect(() => {
    const loaded = getAllOrders();
    setOrders(loaded);
  }, [refreshCount]);

  const handleRefresh = () => {
    setRefreshCount((prev) => prev + 1);
  };

  const handleExportJson = () => {
    const json = exportOrdersAsJson();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `projecthelp-orders-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure? This will delete ALL orders.')) {
      clearAllOrders();
      handleRefresh();
    }
  };

  const handleStatusUpdate = (orderId: string, newStatus: string) => {
    updateOrderStatus(orderId, newStatus as any);
    handleRefresh();
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="gradient-primary text-primary-foreground py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Admin Orders Dashboard</h1>
          <p className="text-primary-foreground/90">Total Orders: {orders.length}</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={handleRefresh}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium"
          >
            <RefreshCw size={18} />
            Refresh
          </button>
          <button
            onClick={handleExportJson}
            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium"
          >
            <Download size={18} />
            Export as JSON
          </button>
          <button
            onClick={handleClearAll}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium"
          >
            <Trash2 size={18} />
            Clear All
          </button>
        </div>

        {/* Orders Table */}
        {orders.length === 0 ? (
          <div className="bg-card rounded-2xl border border-border p-12 text-center">
            <p className="text-muted-foreground text-lg">No orders yet</p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.orderId} className="bg-card rounded-2xl border border-border p-6 card-hover">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-foreground">{order.orderId}</h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          order.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : order.status === 'quoted'
                            ? 'bg-blue-100 text-blue-800'
                            : order.status === 'confirmed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {order.status.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {order.customerName} • {order.customerEmail} • {order.customerPhone}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {order.projects.length} project(s) • {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedOrder(selectedOrder?.orderId === order.orderId ? null : order)}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-medium"
                  >
                    <Eye size={18} />
                    {selectedOrder?.orderId === order.orderId ? 'Hide' : 'View'}
                  </button>
                </div>

                {/* Expanded Details */}
                {selectedOrder?.orderId === order.orderId && (
                  <div className="border-t border-border pt-4 mt-4 space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Customer Information</h4>
                      <div className="bg-muted/20 rounded-lg p-3 space-y-1 text-sm">
                        <p>
                          <strong>Name:</strong> {order.customerName}
                        </p>
                        <p>
                          <strong>Email:</strong> {order.customerEmail}
                        </p>
                        <p>
                          <strong>Phone:</strong> {order.customerPhone}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Projects Requested</h4>
                      <div className="space-y-2">
                        {order.projects.map((proj: any, idx: number) => (
                          <div key={idx} className="flex justify-between p-2 bg-muted/20 rounded">
                            <span className="text-sm font-medium">{proj.name}</span>
                            <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">
                              {proj.domain}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {order.message && (
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Customer Message</h4>
                        <div className="bg-blue-50 rounded-lg p-3 text-sm">{order.message}</div>
                      </div>
                    )}

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Update Status</h4>
                      <div className="flex gap-2 flex-wrap">
                        {['pending', 'quoted', 'confirmed', 'completed'].map((status) => (
                          <button
                            key={status}
                            onClick={() => handleStatusUpdate(order.orderId, status)}
                            className={`px-3 py-1 text-sm rounded font-medium transition-all ${
                              order.status === status
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted text-muted-foreground hover:bg-muted/80'
                            }`}
                          >
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="bg-muted/20 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">
                        <strong>Created:</strong> {new Date(order.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="gradient-primary text-primary-foreground py-6 px-4 mt-12">
        <div className="max-w-7xl mx-auto text-center text-sm">
          <p>Orders are stored in browser localStorage. Export as JSON for backup.</p>
          <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground underline">
            Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
