import { Component, inject } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { OrderService } from '../../../services/orderService';
import { Chart, ChartConfiguration, ChartConfigurationCustomTypesPerDataset } from 'chart.js';
import { ServerTestingModule } from '@angular/platform-server/testing';

@Component({
  imports: [BaseChartDirective],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})

export class Dashboard {
private orderService = inject(OrderService);
//labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


constructor(){
  this.orderService.getOrders().subscribe(orders => {
    this.buildChartData(orders);
    console.log("jeg bliver kørt")
  });
}



public lineChartData: ChartConfiguration<'line'>['data'] = {
  labels:[],
  datasets: [{
    data: [], 
    label: 'Salg (kr.)',
    }
  ]
};
private buildChartData(orders: any[]): void {
 let salesByDate: { [date: string]: number } = {};
  orders.forEach(order => {
    if(salesByDate[order.orderDate]){
      salesByDate[order.orderDate] += order.price;
    }else{
      salesByDate[order.orderDate] = order.price;
    }
  })
  const dates = Object.keys(salesByDate).sort();
  const totals = dates.map(date => salesByDate[date]);
console.log("Dates:" + "\n" + dates + "\nPrice:" + "\n" + Object.values(salesByDate));

this.lineChartData = {
  labels: dates,
  datasets: [{
    label: 'Salg (kr.)',
    data: totals,
  }]
}
}

}




/*
private buildChartData(orders: any[]): void {
 let salesByDate: { [date: string]: number } = {};
  orders.forEach(order => {
    if(salesByDate[order.orderDate]){
      salesByDate[order.orderDate] += order.price;
    }else{
      salesByDate[order.orderDate] = order.price;
    }
  })
  const dates = Object.keys(salesByDate).sort();
  const totals = dates.map(date => salesByDate[date]);
console.log("Dates:" + "\n" + dates + "\nPrice:" + "\n" + Object.values(salesByDate));
  new Chart(this.ctx, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [{
        label: 'Salg (kr.)',
        data: totals,
      }]
    }
  })
}*/