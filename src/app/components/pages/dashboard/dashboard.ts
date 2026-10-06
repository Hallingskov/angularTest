import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  imports: [BaseChartDirective],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})

export class Dashboard {
labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

data: Array<any> = [10, 20, 30, 40, 50]

type = 'line';

options = {
  backgroundColor: 'rgba(245, 248, 248, 0.4)',
  borderColor: 'rgba(75,192,192,1)',
  borderWidth: 1,
  hoverBackgroundColor: 'rgba(75,192,192,0.6)',
  hoverBorderColor: 'rgba(75,192,192,1)',
}



}
