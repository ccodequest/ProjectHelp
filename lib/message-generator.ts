/**
 * Message Generator for WhatsApp and Email
 * Generates formatted messages with order details
 */

export interface MessageData {
  orderId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  projects: Array<{
    name: string;
    domain: string;
  }>;
  message?: string;
}

/**
 * Generate WhatsApp message with order details
 * EDIT: Customize the message format
 */
export function generateWhatsAppMessage(data: MessageData): string {
  const projectsList = data.projects.map((p) => `• ${p.name} (${p.domain})`).join('\n');

  return `Hello!

I'd like to request quotations for the following academic projects:

${projectsList}

*Order ID: ${data.orderId}*

*My Details:*
Name: ${data.customerName}
Email: ${data.customerEmail}
Phone: ${data.customerPhone}

${data.message ? `Additional Message:\n${data.message}\n` : ''}

Please provide quotations and timeline. Looking forward to your response!`;
}

/**
 * Generate email message with order details
 * EDIT: Customize the email message format
 */
export function generateEmailMessage(data: MessageData): string {
  const projectsList = data.projects.map((p) => `- ${p.name} (${p.domain})`).join('\n');

  return `Hello,

I'm interested in quotations for the following academic projects:

${projectsList}

Order ID: ${data.orderId}

My Contact Information:
Name: ${data.customerName}
Email: ${data.customerEmail}
Phone: ${data.customerPhone}

${data.message ? `Additional Notes:\n${data.message}\n` : ''}

Please send me quotations and timeline estimates for these projects.

Thank you!`;
}

/**
 * Generate WhatsApp link
 */
export function generateWhatsAppLink(
  whatsappNumber: string,
  message: string
): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
}

/**
 * Copy text to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
