'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { getOrderById } from '@/lib/order-storage';
import { generateWhatsAppMessage, generateWhatsAppLink, copyToClipboard } from '@/lib/message-generator';
import { CheckCircle2, Copy, MessageCircle, Home } from 'lucide-react';

const WHATSAPP_NUMBER = '+919845293201'; // EDIT: Your WhatsApp number

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId') || '';
  const [orderData, setOrderData] = React.useState<any>(null);
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (orderId) {
      const stored = getOrderById(orderId);
      setOrderData(stored);
    }
  }, [orderId]);

  const handleCopyOrderId = async () => {
    if (orderId) {
      const success = await copyToClipboard(orderId);
      if (success) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  const handleWhatsAppMessage = () => {
    if (orderData) {
      const message = generateWhatsAppMessage({
        orderId,
        customerName: orderData.customerName,
        customerEmail: orderData.customerEmail,
        customerPhone: orderData.customerPhone,
        projects: orderData.projects,
        message: orderData.message,
      });
      const whatsappLink = generateWhatsAppLink(WHATSAPP_NUMBER, message);
      window.open(whatsappLink, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Success Header */}
      <section className="gradient-primary text-primary-foreground py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6 animate-float">
            <div className="w-24 h-24 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
              <CheckCircle2 size={64} className="text-white animate-pulse" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Order Confirmed! ✓</h2>
          <p className="text-lg text-primary-foreground/90 mb-6">
            Your quotation request has been received and is being processed
          </p>
          <div className="inline-block bg-white/20 backdrop-blur px-6 py-2.5 rounded-lg text-primary-foreground font-semibold">
            📱 WhatsApp message is being sent to our team
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Order ID */}
          <div className="gradient-primary rounded-xl border border-primary/30 p-8 text-white text-center shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-sm text-primary-foreground/80 mb-3 uppercase font-semibold tracking-widest">Your Order ID</p>
            <p className="text-4xl md:text-5xl font-bold font-mono break-all mb-6">
              {orderId || 'Loading...'}
            </p>
            <button
              onClick={handleCopyOrderId}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/25 hover:bg-white/35 rounded-lg transition-colors font-semibold backdrop-blur"
            >
              <Copy size={18} />
              {copied ? '✓ Copied!' : 'Copy Order ID'}
            </button>
          </div>

          {/* Order Summary */}
          {orderData && (
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-md space-y-6">
              <h2 className="text-2xl font-bold text-foreground border-b border-gray-200 pb-4">Order Details</h2>

              {/* Customer Details */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Customer Information</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-xs text-muted-foreground font-semibold mb-1">Name</p>
                    <p className="font-semibold text-foreground">{orderData.customerName}</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-xs text-muted-foreground font-semibold mb-1">Email</p>
                    <p className="font-semibold text-foreground break-all text-sm">{orderData.customerEmail}</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 sm:col-span-2">
                    <p className="text-xs text-muted-foreground font-semibold mb-1">Phone</p>
                    <p className="font-semibold text-foreground">{orderData.customerPhone}</p>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">Selected Projects ({orderData.projects?.length || 0})</h3>
                <div className="space-y-3">
                  {orderData.projects?.map((proj: any, i: number) => (
                    <div key={proj.id} className="flex items-start justify-between p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{proj.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">{proj.domain}</p>
                      </div>
                      <span className="text-xs font-bold px-3 py-1 gradient-primary text-white rounded-full ml-4 flex-shrink-0">
                        {proj.domain}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Message */}
              {orderData.message && (
                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-100">
                  <p className="text-xs text-muted-foreground font-semibold mb-2 uppercase">Your Message:</p>
                  <p className="text-foreground">{orderData.message}</p>
                </div>
              )}

              {/* Email Status */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-100">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-semibold text-green-800">Confirmation Email Sent</p>
                    <p className="text-xs text-green-700 mt-1">We've sent details to {orderData.customerEmail}</p>
                    {orderData.emailSentAt && (
                      <p className="text-xs text-green-700 mt-2">Sent at: {new Date(orderData.emailSentAt).toLocaleString()}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-muted-foreground font-medium">Order Status:</span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-bold flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  ✓ Confirmed
                </span>
              </div>
            </div>
          )}

          {/* Next Steps */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl border-2 border-green-200 p-8">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <CheckCircle2 size={24} className="text-green-600" />
              What Happens Next?
            </h3>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">
                  ✓
                </div>
                <div>
                  <p className="font-semibold text-foreground">Message Sent to WhatsApp</p>
                  <p className="text-sm text-muted-foreground mt-1">Your order details are being sent to our WhatsApp. Our team will acknowledge receipt within minutes.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email Confirmation Received</p>
                  <p className="text-sm text-muted-foreground mt-1">Check your email ({orderData?.customerEmail}) for order confirmation with all details</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <p className="font-semibold text-foreground">Personalized Quotations</p>
                  <p className="text-sm text-muted-foreground mt-1">We'll provide detailed quotations for each project including pricing and timeline within 2-4 hours</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div>
                  <p className="font-semibold text-foreground">Get Started Immediately</p>
                  <p className="text-sm text-muted-foreground mt-1">Once you approve quotations, we'll begin work on your projects right away</p>
                </div>
              </li>
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleWhatsAppMessage}
              className="w-full py-3 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all gap-2 flex items-center justify-center shadow-md hover:shadow-lg"
            >
              <MessageCircle size={20} />
              Send Message Again to WhatsApp
            </button>

            <Link href="/" className="block">
              <Button className="w-full gradient-primary text-white py-3 font-semibold rounded-lg gap-2">
                <Home size={20} />
                Back to Home
              </Button>
            </Link>

            <Link href="/marketplace" className="block">
              <Button variant="outline" className="w-full border-2 rounded-lg bg-white py-3 font-semibold hover:bg-gray-50">
                Browse More Projects
              </Button>
            </Link>
          </div>

          {/* Support Section */}
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 text-center">
            <p className="text-sm text-muted-foreground mb-3">Need immediate assistance?</p>
            <a
              href="https://wa.me/919845293201"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all"
            >
              <MessageCircle size={18} />
              Chat with Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-primary text-primary-foreground/90 py-12 px-4 mt-12">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <p className="font-semibold text-lg mb-2">© 2024 ProjectHelp</p>
          <p className="text-primary-foreground/70">Professional academic project solutions</p>
        </div>
      </footer>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <SuccessContent />
    </Suspense>
  );
}
