# ProjectHelp Order & WhatsApp Workflow Guide

## Complete Order Flow

### 1. **Customer Places Order**
- Customer visits `/marketplace` and adds projects to cart
- Customer goes to `/checkout`
- Customer fills in: Name, Email, Phone, Optional Message
- Customer clicks "Send Request & Get Quotation"

### 2. **Order Processing (Automatic)**
When the customer submits:
- ✅ Order ID generated (format: `ORD-{timestamp}-{random}`)
- ✅ Order data saved to localStorage as JSON
- ✅ Email sent via Web3Forms with order details
- ✅ WhatsApp message generated with:
  - Order ID
  - Customer name, email, phone
  - List of all requested projects with domains
  - Any additional customer message
- ✅ WhatsApp link opens automatically in new tab
- ✅ Customer redirected to `/success` page with Order ID

### 3. **Success Page**
The success page shows:
- ✅ Order confirmation with checkmark
- ✅ Order ID (copyable)
- ✅ Full order summary with customer details
- ✅ List of requested projects and domains
- ✅ Order status: "Confirmed & Received"
- ✅ Clear next steps
- ✅ "Send Message Again (Manual)" button for WhatsApp

### 4. **Admin Verification** (`/admin/orders`)
Access all orders with:
- 📊 View all orders in one dashboard
- 🔄 Refresh to see new orders
- 💾 Export all orders as JSON file
- 📝 View detailed order information
- ✏️ Update order status (pending → quoted → confirmed → completed)
- 🗑️ Clear all orders if needed

## Data Storage

### LocalStorage Keys
- `projecthelp-orders` - Array of all orders (JSON)
- `projecthelp-last-order-id` - Last order ID for quick access
- `projecthelp-cart` - Current shopping cart

### JSON Structure
```json
{
  "orderId": "ORD-1234567890-ABC123",
  "customerName": "John Doe",
  "customerEmail": "john@example.com",
  "customerPhone": "+91 9876543210",
  "projects": [
    {
      "id": "proj1",
      "name": "Sentiment Analysis Model",
      "domain": "AI/ML"
    },
    {
      "id": "proj2",
      "name": "Network Intrusion Detection",
      "domain": "Cybersecurity"
    }
  ],
  "message": "Urgent - needed by next week",
  "createdAt": "2024-02-04T10:30:00.000Z",
  "status": "pending"
}
```

## WhatsApp Message Format

When order is placed, this message is sent automatically:

```
Hello! 👋

I'd like to request quotations for the following academic projects:

• Sentiment Analysis Model (AI/ML)
• Network Intrusion Detection (Cybersecurity)

*Order ID: ORD-1234567890-ABC123*

*My Details:*
Name: John Doe
Email: john@example.com
Phone: +91 9876543210

Urgent - needed by next week

Please provide quotations and timeline. Looking forward to your response!
```

## Configuration

### Edit WhatsApp Number (3 locations)
1. `/components/header.tsx` - Line 6: `WHATSAPP_NUMBER`
2. `/app/checkout/page.tsx` - Line 15: `WHATSAPP_NUMBER`
3. `/app/success/page.tsx` - Line 13: `WHATSAPP_NUMBER`

### Edit Web3Forms API Key
1. `/app/checkout/page.tsx` - Line 16: `WEB3FORMS_KEY`

### Edit WhatsApp Message Format
1. `/lib/message-generator.ts` - `generateWhatsAppMessage()` function

### Edit Email Message Format
1. `/lib/message-generator.ts` - `generateEmailMessage()` function

## Troubleshooting

### WhatsApp Not Opening?
- Check if WhatsApp number is correct in all 3 files
- Try clicking "Send Message Again (Manual)" button on success page
- Check browser console for errors

### Email Not Sending?
- Verify Web3Forms API key is correct
- Check that email field is valid
- Check browser console for errors
- Web3Forms may take a few seconds

### Orders Not Saving?
- Check that localStorage is enabled in browser
- Clear browser cache and try again
- Check browser's Developer Tools → Application → Local Storage

### Admin Page Not Showing Orders?
- Go to `/admin/orders` to view all orders
- Click "Refresh" button to reload orders from localStorage
- Orders are stored in browser, not on server

## Access Admin Dashboard
Visit: `http://localhost:3000/admin/orders` (or your domain)

Features:
- View all orders with status badges
- Click "View" to see full order details
- Change order status
- Export orders as JSON
- See customer information, projects, and messages

## Notes
- All data is stored in browser localStorage
- Orders persist until user clears browser data
- Export orders as JSON for backup/archival
- Order status can be manually updated by admin
- WhatsApp message is sent automatically when order is placed
