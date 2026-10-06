export interface Order {
  id: number;
  productName: string;
  type: string;
  price: number;
  orderDate: string;
}

export interface OrdersResponse {
  orders: Order[];
}