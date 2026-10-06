import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/layout/header/header'
import { Dashboard } from './components/pages/dashboard/dashboard';
import { BaseChartDirective } from 'ng2-charts';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { provideHttpClient } from '@angular/common/http';
import {ChartConfiguration} from 'chart.js';
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, Header, Dashboard, BaseChartDirective],
  templateUrl:'./app.html',
  styleUrl:'./app.css'
})

export class App {
  protected readonly title = signal('angularTest');
}



