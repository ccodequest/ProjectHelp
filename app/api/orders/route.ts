import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

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
}

const ORDERS_FILE_PATH = join(process.cwd(), 'orders.json');

// Ensure orders.json exists
async function ensureOrdersFile() {
  if (!existsSync(ORDERS_FILE_PATH)) {
    await writeFile(ORDERS_FILE_PATH, JSON.stringify([], null, 2), 'utf-8');
  }
}

// Read all orders
async function readOrders(): Promise<Order[]> {
  try {
    await ensureOrdersFile();
    const data = await readFile(ORDERS_FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading orders:', error);
    return [];
  }
}

// Write orders
async function writeOrders(orders: Order[]): Promise<void> {
  try {
    await ensureOrdersFile();
    await writeFile(ORDERS_FILE_PATH, JSON.stringify(orders, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing orders:', error);
    throw error;
  }
}

// POST: Save new order
export async function POST(request: NextRequest) {
  try {
    const order: Order = await request.json();
    
    // Validate order data
    if (!order.orderId || !order.customerName || !order.customerEmail || !order.customerPhone) {
      return NextResponse.json(
        { error: 'Missing required order fields' },
        { status: 400 }
      );
    }

    // Read existing orders
    const orders = await readOrders();
    
    // Check for duplicate order ID
    const existingOrder = orders.find(o => o.orderId === order.orderId);
    if (existingOrder) {
      return NextResponse.json(
        { error: 'Order ID already exists' },
        { status: 409 }
      );
    }

    // Add new order
    orders.push(order);
    
    // Save to file
    await writeOrders(orders);

    return NextResponse.json(
      { success: true, orderId: order.orderId },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving order:', error);
    return NextResponse.json(
      { error: 'Failed to save order' },
      { status: 500 }
    );
  }
}

// GET: Retrieve all orders or specific order by ID
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get('orderId');

    const orders = await readOrders();

    if (orderId) {
      const order = orders.find(o => o.orderId === orderId);
      if (!order) {
        return NextResponse.json(
          { error: 'Order not found' },
          { status: 404 }
        );
      }
      return NextResponse.json(order);
    }

    return NextResponse.json(orders);
  } catch (error) {
    console.error('Error retrieving orders:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve orders' },
      { status: 500 }
    );
  }
}
