'use client';

import Link from 'next/link';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/cart-context';
import { ArrowLeft, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartPage() {
  const { items, removeFromCart, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />

        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-xl border border-gray-200 p-12 hover:shadow-lg transition-shadow">
              <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
              <h1 className="text-3xl font-bold text-foreground mb-4">Your Cart is Empty</h1>
              <p className="text-muted-foreground mb-8 text-lg">
                Start adding projects to get quotations for your academic needs.
              </p>
              <Link href="/marketplace">
                <Button className="gradient-primary text-white gap-2 rounded-lg px-8 py-3">
                  <ArrowLeft size={18} />
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Header */}
      <section className="gradient-primary text-primary-foreground py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Shopping Cart</h1>
              <p className="text-primary-foreground/80 mt-2">
                {items.length} project{items.length !== 1 ? 's' : ''} ready for quotation
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-lg">
              <p className="text-sm text-primary-foreground/80 uppercase font-semibold">Items</p>
              <p className="text-4xl font-bold text-white">{items.length}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.project.id}
                  className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all hover:border-primary"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex gap-2 mb-3">
                        <span className="text-xs font-bold px-3 py-1.5 gradient-primary text-white rounded-full uppercase">
                          {item.project.domain}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{item.project.name}</h3>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.project.id)}
                      className="p-2 hover:bg-red-50 rounded-lg transition-colors text-red-600 hover:text-red-700"
                      aria-label="Remove from cart"
                      title="Remove item from cart"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24 hover:shadow-lg transition-shadow space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Order Summary</h3>

              {/* Project Count */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-100">
                <p className="text-sm text-muted-foreground font-medium mb-2">Total Projects</p>
                <p className="text-3xl font-bold text-foreground">{items.length}</p>
              </div>

              {/* Projects List */}
              <div className="space-y-2 max-h-48 overflow-y-auto border-b border-gray-200 pb-4">
                {items.map((item) => (
                  <div key={item.project.id} className="text-sm p-2 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start">
                      <span className="font-medium text-foreground flex-1">{item.project.name}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{item.project.domain}</p>
                  </div>
                ))}
              </div>

              {/* Info Box */}
              <div className="bg-blue-50 rounded-lg p-4 text-sm text-foreground border border-blue-100 space-y-2">
                <p className="font-semibold">Next Steps:</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Proceed to checkout</li>
                  <li>• Fill in your details</li>
                  <li>• Receive quotations</li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <Link href="/checkout" className="block">
                  <Button className="w-full gradient-primary text-white py-3 font-semibold rounded-lg text-base hover:shadow-lg transition-all gap-2">
                    <ArrowRight size={20} />
                    Request Quotation
                  </Button>
                </Link>

                <Link href="/marketplace" className="block">
                  <Button variant="outline" className="w-full border-2 rounded-lg bg-white hover:bg-gray-50 font-semibold py-3">
                    Continue Shopping
                  </Button>
                </Link>

                <button
                  onClick={() => clearCart()}
                  className="w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium"
                >
                  Clear Cart
                </button>
              </div>

              {/* Security Message */}
              <div className="text-xs text-muted-foreground text-center pt-4 border-t border-gray-200">
                ✓ Your cart is saved locally and won't be shared
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground/80 py-12 px-4 mt-12">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <p className="font-semibold text-white mb-2">© 2024 ProjectHelp</p>
          <p className="text-primary-foreground/70">
            Professional academic project solutions for students worldwide
          </p>
        </div>
      </footer>
    </div>
  );
}
