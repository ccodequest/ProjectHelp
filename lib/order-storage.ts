/**
 * Order Storage System
 * Stores orders in localStorage as JSON for verification and tracking
 * EDIT: Modify order structure if needed
 */

export interface OrderItem {
  id: string;
  name: string;
  domain: string;
}

export interface Order {
  orderId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  projects: OrderItem[];
  message: string;
  createdAt: string;
  status: 'pending' | 'quoted' | 'confirmed' | 'completed';
  emailSent?: boolean;
  emailSentAt?: string;
}

/**
 * Generate unique Order ID
 */
export function generateOrderId(): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 9).toUpperCase();
  return `ORD-${timestamp}-${random}`;
}

/**
 * Save order to localStorage
 */
export function saveOrder(order: Order): void {
  try {
    const orders = getAllOrders();
    orders.push(order);
    localStorage.setItem('projecthelp-orders', JSON.stringify(orders, null, 2));
    localStorage.setItem('projecthelp-last-order-id', order.orderId);
  } catch (error) {
    console.error('Error saving order:', error);
  }
}

/**
 * Get all orders from localStorage
 */
export function getAllOrders(): Order[] {
  try {
    const orders = localStorage.getItem('projecthelp-orders');
    return orders ? JSON.parse(orders) : [];
  } catch (error) {
    console.error('Error retrieving orders:', error);
    return [];
  }
}

/**
 * Get last order ID
 */
export function getLastOrderId(): string {
  try {
    return localStorage.getItem('projecthelp-last-order-id') || '';
  } catch (error) {
    console.error('Error retrieving last order ID:', error);
    return '';
  }
}

/**
 * Get order by ID
 */
export function getOrderById(orderId: string): Order | null {
  try {
    const orders = getAllOrders();
    return orders.find((order) => order.orderId === orderId) || null;
  } catch (error) {
    console.error('Error retrieving order:', error);
    return null;
  }
}

/**
 * Update order status
 */
export function updateOrderStatus(orderId: string, status: Order['status']): void {
  try {
    const orders = getAllOrders();
    const order = orders.find((o) => o.orderId === orderId);
    if (order) {
      order.status = status;
      localStorage.setItem('projecthelp-orders', JSON.stringify(orders, null, 2));
    }
  } catch (error) {
    console.error('Error updating order status:', error);
  }
}

/**
 * Export orders as JSON (for admin/verification)
 */
export function exportOrdersAsJson(): string {
  try {
    const orders = getAllOrders();
    return JSON.stringify(orders, null, 2);
  } catch (error) {
    console.error('Error exporting orders:', error);
    return '[]';
  }
}

/**
 * Clear all orders (use with caution)
 */
export function clearAllOrders(): void {
  try {
    localStorage.removeItem('projecthelp-orders');
    localStorage.removeItem('projecthelp-last-order-id');
  } catch (error) {
    console.error('Error clearing orders:', error);
  }
}

/**
 * Format order for display
 */
export function formatOrderForDisplay(order: Order): string {
  const projectsList = order.projects.map((p) => `• ${p.name} (${p.domain})`).join('\n');
  const emailStatus = order.emailSent ? 'SENT' : 'NOT SENT';
  const emailSentAt = order.emailSentAt ? new Date(order.emailSentAt).toLocaleString() : 'N/A';

  return `
Order ID: ${order.orderId}
Customer: ${order.customerName}
Email: ${order.customerEmail}
Phone: ${order.customerPhone}

Projects:
${projectsList}

Message: ${order.message}

Status: ${order.status.toUpperCase()}
Email: ${emailStatus}
Email Sent At: ${emailSentAt}
Created: ${new Date(order.createdAt).toLocaleString()}
  `.trim();
}
