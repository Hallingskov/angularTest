import { Service } from '@angular/core';
import { Order, OrdersResponse } from '../models/order';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
private http = inject(HttpClient);

  getOrders(): Observable<Order[]> {
    return this.http.get<OrdersResponse>('orders.json')
      .pipe(
        map(response => response.orders)
      );
  }
}

