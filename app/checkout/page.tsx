'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/lib/cart-context';
import { generateWhatsAppMessage, generateWhatsAppLink, copyToClipboard } from '@/lib/message-generator';
import { ArrowLeft, Mail, MessageCircle, Loader, AlertCircle, CheckCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '+919845293201';

// Generate unique order ID with timestamp and random string
function generateUniqueOrderId(): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 12).toUpperCase();
  const uniqueId = `${timestamp}${random}`;
  return `PH-${uniqueId}`;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { items, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-2xl mx-auto px-4 py-20 text-center">
          <div className="bg-card rounded-2xl border border-border p-12 card-hover">
            <h1 className="text-2xl font-bold text-foreground mb-4">Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Your cart is empty. Please add projects before checkout.
            </p>
            <Link href="/marketplace">
              <Button className="gap-2">
                <ArrowLeft size={18} />
                Back to Marketplace
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrorMessage('');
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\d\s\+\-\(\)]{10,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name');
      return;
    }
    
    if (!formData.email.trim()) {
      setErrorMessage('Please enter your email address');
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    if (!formData.phone.trim()) {
      setErrorMessage('Please enter your phone number');
      return;
    }

    if (!validatePhone(formData.phone)) {
      setErrorMessage('Please enter a valid phone number (at least 10 digits)');
      return;
    }

    setIsSubmitting(true);

    try {
      // Generate unique order ID
      const orderId = generateUniqueOrderId();

      // Prepare order data
      const orderData = {
        orderId,
        customerName: formData.name.trim(),
        customerEmail: formData.email.trim(),
        customerPhone: formData.phone.trim(),
        projects: items.map((item) => ({
          id: item.project.id,
          name: item.project.name,
          domain: item.project.domain,
        })),
        message: formData.message.trim(),
        createdAt: new Date().toISOString(),
        status: 'pending' as const,
      };

      // Save order to JSON file via API
      const saveResponse = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!saveResponse.ok) {
        throw new Error('Failed to save order');
      }

      const saveResult = await saveResponse.json();
      console.log('Order saved successfully:', saveResult);

      // Generate WhatsApp message
      const whatsappMessage = generateWhatsAppMessage(orderData);

      // Copy WhatsApp message to clipboard
      try {
        await copyToClipboard(whatsappMessage);
      } catch {
        console.warn('Could not copy to clipboard');
      }

      // Clear cart
      clearCart();

      // Open WhatsApp with the message
      setTimeout(() => {
        const whatsappLink = generateWhatsAppLink(WHATSAPP_NUMBER, whatsappMessage);
        window.open(whatsappLink, '_blank');
      }, 300);

      // Navigate to success page
      router.push(`/success?orderId=${orderId}`);
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage('An error occurred while processing your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Header */}
      <section className="gradient-primary text-primary-foreground py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl md:text-5xl font-bold">ProjectHelp - Request Quotation</h1>
            <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-xl">
              <p className="text-sm text-primary-foreground/80 uppercase font-semibold">Projects Selected</p>
              <p className="text-3xl font-bold text-white">{items.length}</p>
            </div>
          </div>
          <p className="text-primary-foreground/90">Fill in your details and we'll send you project quotations</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-2">
            <div className="bg-card rounded-2xl border border-border p-8 shadow-md space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Complete Your Request</h2>
                <p className="text-muted-foreground text-sm mt-1">Fill in your details and we'll send quotations to your email</p>
              </div>

              {/* Error Alert */}
              {errorMessage && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex gap-3">
                  <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                  <p className="text-red-800 text-sm">{errorMessage}</p>
                </div>
              )}

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                  className="rounded-lg border-2"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="rounded-lg border-2"
                />
                <p className="text-xs text-muted-foreground mt-1">We'll contact you regarding your order</p>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <Input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 9845293201"
                  required
                  className="rounded-lg border-2"
                />
                <p className="text-xs text-muted-foreground mt-1">We'll also contact you on WhatsApp</p>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Additional Requirements <span className="text-muted-foreground text-xs font-normal">(Optional)</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your specific requirements, deadline, or any special instructions..."
                  rows={4}
                  className="rounded-lg border-2"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full gradient-primary text-white py-3 font-semibold text-base rounded-lg gap-2 hover:opacity-90 transition-opacity disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader size={20} className="animate-spin" />
                    Processing your request...
                  </>
                ) : (
                  <>
                    <Mail size={20} />
                    Send Quotation Request
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to be contacted regarding your quotation request
              </p>
            </div>
          </form>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-card rounded-2xl border border-border p-6 sticky top-24 shadow-md space-y-6">
              <h3 className="text-xl font-bold text-foreground">Order Summary</h3>

              {/* Projects List */}
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.project.id} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-3 border border-blue-100">
                    <p className="font-semibold text-foreground text-sm">{item.project.name}</p>
                    <p className="text-xs text-primary font-medium mt-1">{item.project.domain}</p>
                  </div>
                ))}
              </div>

              {/* Project Count */}
              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-foreground font-semibold">Total Projects:</span>
                  <span className="gradient-primary bg-clip-text text-transparent font-bold text-xl">{items.length}</span>
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 text-sm text-foreground border border-green-100">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  What Happens Next
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Order saved securely</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>WhatsApp message with details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Personalized quotations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Quick project delivery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-primary text-primary-foreground/90 py-12 px-4 mt-12">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <p className="font-semibold text-lg mb-2">© 2024 ProjectHelp</p>
          <p className="text-primary-foreground/70">We provide academic project solutions with professional quality</p>
        </div>
      </footer>
    </div>
  );
}
