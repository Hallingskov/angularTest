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

constructor(){
  this.orderService.getOrders().subscribe(orders => {
    console.log('Orders:', orders);
  });
}

public lineChartData: ChartConfiguration<'line'>['data'] = {
  labels: [],
  datasets: [
    {data: [], label: 'Salg (kr.)'}
  ]
};

private buildChartData(orders: any[]): void {
  const salesByDate: Record<string, number> = {};


}
}
