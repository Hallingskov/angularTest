import { Service, inject } from '@angular/core';
import { orders } from "../../server/data";
import { Order, OrdersResponse } from '../models/order';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Service()
export class Data {

private orderURL = "http://localhost:4200/api/orders";

private http = inject(HttpClient);

getOrders(): Observable<OrdersResponse[]> {
    return this.http.get<OrdersResponse[]>(this.orderURL);
}
}



