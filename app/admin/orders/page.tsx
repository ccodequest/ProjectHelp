'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Trash2, RefreshCw, Eye, Package, Mail, Phone, Calendar, User } from 'lucide-react';

interface Order {
  orderId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  projects: Array<{
    id: string;
    name: string;
    domain: string;
  }>;
  message: string;
  createdAt: string;
  status: 'pending' | 'quoted' | 'confirmed' | 'completed';
}

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/orders');
      if (response.ok) {
        const data = await response.json();
        setOrders(data);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleExportJson = () => {
    const dataStr = JSON.stringify(orders, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `orders-${Date.now()}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'quoted': return 'bg-blue-100 text-blue-800';
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="gradient-primary text-primary-foreground py-6 px-4">
        <div className="max-w-7xl mxgray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Orders Management</h1>
            <p className="text-gray-600">View and manage all customer orders</p>
          </div>
          <div className="flex gap-3">
            <Button onClick={fetchOrders} variant="outline" className="gap-2">
              <RefreshCw size={20} />
              Refresh
            </Button>
            <Button onClick={handleExportJson} className="gap-2">
              <Download size={20} />
              Export Orders
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <Package className="mb-2" size={32} />
            <p className="text-3xl font-bold">{orders.length}</p>
            <p className="text-blue-100">Total Orders</p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-yellow-500 to-yellow-600 text-white">
            <Package className="mb-2" size={32} />
            <p className="text-3xl font-bold">{orders.filter(o => o.status === 'pending').length}</p>
            <p className="text-yellow-100">Pending</p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-green-500 to-green-600 text-white">
            <Package className="mb-2" size={32} />
            <p className="text-3xl font-bold">{orders.filter(o => o.status === 'confirmed').length}</p>
            <p className="text-green-100">Confirmed</p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <Package className="mb-2" size={32} />
            <p className="text-3xl font-bold">{orders.filter(o => o.status === 'completed').length}</p>
            <p className="text-purple-100">Completed</p>
          </Card>
        </div>

        {loading ? (
          <Card className="p-12 text-center">
            <RefreshCw className="animate-spin mx-auto mb-4" size={48} />
            <p className="text-gray-600">Loading orders...</p>
          </Card>
        ) : orders.length === 0 ? (
          <Card className="p-12 text-center bg-white">
            <Package size={64} className="mx-auto mb-4 text-gray-400" />
            <p className="text-gray-500 text-lg">No orders yet</p>
            <p className="text-gray-400 text-sm mt-2">Orders will appear here when customers place them</p>
          </Card>
        ) : (
          <div className="space-y-4">
            {orders.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).map((order) => (
              <Card key={order.orderId} className="p-6 bg-white border-2 border-gray-200 hover:border-primary transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          Order {order.orderId}
                        </h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(order.status)}`}>
                          {order.status.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-3 text-gray-700">
                        <User size={20} className="text-primary" />
                        <div>
                          <p className="text-xs text-gray-500">Customer</p>
                          <p className="font-semibold">{order.customerName}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <Mail size={20} className="text-primary" />
                        <div>
                          <p className="text-xs text-gray-500">Email</p>
                          <p className="font-semibold">{order.customerEmail}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <Phone size={20} className="text-primary" />
                        <div>
                          <p className="text-xs text-gray-500">Phone</p>
                          <p className="font-semibold">{order.customerPhone}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <Calendar size={20} className="text-primary" />
                        <div>
                          <p className="text-xs text-gray-500">Date</p>
                          <p className="font-semibold">
                            {new Date(order.createdAt).toLocaleDateString()} {new Date(order.createdAt).toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Projects ({order.projects.length}):</p>
                      <div className="flex flex-wrap gap-2">
                        {order.projects.map((project, idx) => (
                          <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            {project.name} - {project.domain}
                          </span>
                        ))}
                      </div>
                    </div>

                    {order.message && (
                      <div className="mt-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="text-sm font-semibold text-gray-700 mb-1">Message:</p>
                        <p className="text-sm text-gray-600">{order.message}</p>
                      </div>
                    )}
                  </div>

                  <Button
                    onClick={() => setSelectedOrder(order)}
                    variant="outline"
                    className="gap-2 md:ml-4"
                  >
                    <Eye size={18} />
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Order Details Modal */}
        {selectedOrder && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedOrder(null)}>
            <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 bg-white" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold">Order Details</h2>
                <Button variant="outline" onClick={() => setSelectedOrder(null)}>Close</Button>
              </div>
              <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
                {JSON.stringify(selectedOrder, null, 2)}
              </pre>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

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
