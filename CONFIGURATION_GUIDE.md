# ProjectHelp - Configuration Guide

This guide shows you how to customize ProjectHelp for your needs.

## Quick Overview

- **No Pricing**: Projects don't have prices. Quotations are sent after customer messages.
- **No Complex Features**: Simple marketplace → cart → checkout → order stored in JSON
- **All Frontend**: Everything runs in the browser with localStorage
- **Easy to Edit**: All customizable values are marked with `// EDIT:` comments

---

## Configuration Files

### 1. **Projects List** (`/lib/mock-data.ts`)

**What it does**: Stores all available projects

**How to edit**:

```typescript
export const mockProjects: Project[] = [
  {
    id: 'proj-001',           // Unique ID
    name: 'Sentiment Analysis using NLP',  // Project name
    domain: 'AI/ML',          // Domain category
  },
  // Add more projects here
];
```

**Available Domains**:
- AI/ML
- Cybersecurity
- DBMS
- Web Development
- Mobile App
- Cloud Computing
- Data Science
- IoT
- Blockchain

---

### 2. **WhatsApp Number** (`/components/header.tsx` and `/app/checkout/page.tsx`)

**Location 1**: Header Component
```typescript
const WHATSAPP_NUMBER = '+919845293201'; // EDIT: Your WhatsApp number
```

**Location 2**: Checkout Page
```typescript
const WHATSAPP_NUMBER = '+919845293201'; // EDIT: Your WhatsApp number
```

**Example**: `+919845293201`

---

### 3. **Email Service** (`/app/checkout/page.tsx`)

**What it does**: Sends order confirmations via Web3Forms

**How to set up**:
1. Go to [web3forms.com](https://web3forms.com)
2. Get your Access Key
3. Update in checkout page:

```typescript
const WEB3FORMS_KEY = 'c39053a3-c76f-4008-aa99-557d788d7a87'; // EDIT: Your key
```

---

### 4. **Order Messages** (`/lib/message-generator.ts`)

**Customize the format** of WhatsApp and email messages:

```typescript
export function generateWhatsAppMessage(data: MessageData): string {
  const projectsList = data.projects.map((p) => `• ${p.name} (${p.domain})`).join('\n');

  return `Hello! 👋

I'd like to request quotations for the following academic projects:

${projectsList}

*Order ID: ${data.orderId}*

...rest of message...`;
}
```

**Edit the message template** to match your style and branding.

---

## Data Storage

### Orders JSON Structure (`localStorage`)

Orders are stored in the browser's localStorage as JSON:

```json
{
  "orderId": "ORD-1707123456-ABC123",
  "customerName": "John Doe",
  "customerEmail": "john@example.com",
  "customerPhone": "+91 98452 93201",
  "projects": [
    {
      "id": "proj-001",
      "name": "Sentiment Analysis using NLP",
      "domain": "AI/ML"
    }
  ],
  "message": "Need it urgently",
  "createdAt": "2024-02-04T10:30:00.000Z",
  "status": "pending"
}
```

**Access all orders**:
- Open browser DevTools (F12)
- Go to Console
- Type: `JSON.parse(localStorage.getItem('projecthelp-orders'))`

**Export orders**:
- Use `/lib/order-storage.ts` function `exportOrdersAsJson()`

---

## Page Customization

### Home Page (`/app/page.tsx`)
- Hero section text
- Trust badges
- Category display

### Marketplace (`/app/marketplace/page.tsx`)
- Search functionality
- Domain filter
- Grid layout

### Cart (`/app/cart/page.tsx`)
- Cart summary
- Action buttons
- Info messages

### Checkout (`/app/checkout/page.tsx`)
- Form fields
- Order summary
- Success actions

### Success (`/app/success/page.tsx`)
- Order confirmation display
- Next steps message
- Action buttons

---

## Styling

### Colors (`/app/globals.css`)

All colors are defined as CSS variables:

```css
:root {
  --primary: oklch(0.50 0.25 280);        /* Purple */
  --secondary: oklch(0.55 0.20 220);      /* Blue */
  --accent: oklch(0.65 0.25 320);         /* Pink */
  --background: oklch(0.99 0 0);          /* White */
  --foreground: oklch(0.20 0 0);          /* Dark text */
}
```

**Edit colors** to match your brand.

### Animations

Available animation classes:
- `animate-float` - Floating effect
- `animate-pulse-glow` - Glowing pulse
- `card-hover` - Card hover animation
- `gradient-primary` - Purple-to-blue gradient
- `gradient-accent` - Blue-to-pink gradient

---

## Common Tasks

### Add a New Project

1. Open `/lib/mock-data.ts`
2. Add to `mockProjects` array:
```typescript
{
  id: 'proj-033',
  name: 'Your Project Name',
  domain: 'AI/ML', // or other domain
}
```
3. Save and refresh

### Change WhatsApp Number

1. `/components/header.tsx` - Line ~7
2. `/app/checkout/page.tsx` - Line ~14
3. `/app/success/page.tsx` - Line ~15

### Change Email API Key

1. Go to [web3forms.com](https://web3forms.com)
2. Copy your access key
3. Update `/app/checkout/page.tsx` - Line ~15

### View All Orders

1. Open browser DevTools (F12)
2. Go to Application → localStorage
3. Look for `projecthelp-orders`

### Clear All Data

```javascript
// In browser console:
localStorage.clear();
```

---

## File Structure

```
/app
  /checkout/page.tsx      - Quotation request form
  /success/page.tsx       - Order confirmation
  /cart/page.tsx          - Shopping cart
  /marketplace/page.tsx   - Project browser
  /page.tsx               - Home page
  /layout.tsx             - App layout
  /globals.css            - Colors & animations

/lib
  /mock-data.ts           - Projects list
  /order-storage.ts       - Order management
  /message-generator.ts   - Message formatting
  /cart-context.tsx       - Cart state management

/components
  /header.tsx             - Navigation header
  /ui/...                 - UI components
```

---

## Troubleshooting

**Q: Orders not showing on success page?**
A: Check browser console for errors. Ensure localStorage is not full.

**Q: WhatsApp not opening?**
A: Check the WhatsApp number format. Must include country code (e.g., +91).

**Q: Email not sending?**
A: Verify Web3Forms API key is correct and active.

**Q: Projects not appearing?**
A: Ensure projects are in `mockProjects` array in mock-data.ts.

---

## Support

For issues or questions, check the browser console (F12) for error messages.

All data is stored locally - no external database needed!
