import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { OrderService } from '../../../services/orderService';
import { Injectable, inject } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { ServerTestingModule } from '@angular/platform-server/testing';

@Component({
  imports: [BaseChartDirective],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})

export class Dashboard {
private orderService = inject(OrderService);
labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


constructor(){
  this.orderService.getOrders().subscribe(orders => {
    this.buildChartData(orders);
  });
}



public lineChartData: ChartConfiguration<'line'>['data'] = {
  labels: this.labels,
  datasets: [{
    data: [], 
    label: 'Salg (kr.)',
    
    
    
    
    }
  ]
};

private buildChartData(orders: any[]): void {
  let salesByDate: string[] = [];
  let price: number[] = [];
  orders.forEach(order => {
    price.push(order.price);
    salesByDate.push(order.orderDate);
  })
return this.lineChartData = {
  
}
}
}