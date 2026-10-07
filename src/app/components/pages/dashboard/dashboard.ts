import { Component, inject } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { OrderService } from '../../../services/orderService';
import { ChartConfiguration, ChartConfigurationCustomTypesPerDataset } from 'chart.js';
import { Data } from '../../../services/data';


@Component({
  imports: [BaseChartDirective],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})

export class Dashboard {
private orderService = inject(OrderService);
private dataService = inject(Data);


constructor(){
  this.orderService.getOrders().subscribe(orders => {
    this.buildChartData(orders);
    this.buildCircleChartData(orders);
  });
  this.getOrders();
}

public getOrders(): void {
  this.dataService.getOrders().subscribe(orders => {
    console.log("Orders from Data Service:", orders);
  })
}
  

public lineChartData: ChartConfiguration<'line'>['data'] = {
  labels:[],
  datasets: [{
    data: [], 
    label: 'Salg (kr.)',
    }
  ]
};


public circleChartData: ChartConfiguration<'pie'>['data'] = {
  labels: [],
  datasets: [{
    data: [],
    label: 'Produkter',
  }]
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


private buildCircleChartData(orders: any[]): void {
  let productByTypes: { [type: string]: number } = {};
  
  orders.forEach(order => {
    if(productByTypes[order.type]){
      productByTypes[order.type] += 1;
    }else{
      productByTypes[order.type] = 1;
    }
  })
  const type = Object.keys(productByTypes)
  const totals = type.map(type => productByTypes[type]);
  console.log("Type:" + "\n" + type + "\nCount:" + "\n" + Object.values(productByTypes));

  this.circleChartData = {
    labels: type,
    datasets: [{
      data: totals,
      label: 'Produkter',
    }]
  }

}


}