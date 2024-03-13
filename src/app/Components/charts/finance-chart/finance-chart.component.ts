import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  ApexChart,
  ApexDataLabels,
  ApexNonAxisChartSeries,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

@Component({
  selector: 'app-finance-chart',
  templateUrl: './finance-chart.component.html',
  styleUrl: './finance-chart.component.css',
})
export class FinanceChartComponent implements OnInit {
  createdProjects = 0;
  appliedOffers = 0;
  rejectedOffers = 0;
  pendingOffers = 0;
  ngOnInit(): void {
   const inter1= setInterval(() => {
      this.createdProjects < 468? this.createdProjects++:this.createdProjects;
      this.rejectedOffers < 65 ? this.rejectedOffers++ : this.rejectedOffers;
      this.pendingOffers < 134 ? this.pendingOffers++ : this.pendingOffers;
    }, 10);
    const inter2 = setInterval(() => {
      this.appliedOffers < 2680 ? this.appliedOffers++ : this.appliedOffers;
    }, 0.2);
  }
  count = 200;
  duration = 5000;

  // expenseTitle: ApexTitleSubtitle = {
  //   text: 'Total Expenses ',
  //   align: 'center',
  //   style: {
  //     fontSize: '14px',
  //   },
  // };
  // expenseSeries: ApexNonAxisChartSeries = [55, 35, 10];
  // expenseColors = ['#00D8B6', '#008FFB', '#FEB019', '#FF4560', '#775DD0'];

  // expenseDetails: ApexChart = {
  //   type: 'area',
  //   height: 160,
  //   sparkline: {
  //     enabled: true,
  //   },
  // };

  // expenseLabels = ['', ' '];
  // expenseDataLabels: ApexDataLabels = { enabled: false };
}
