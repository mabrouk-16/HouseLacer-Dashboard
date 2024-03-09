import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-projects-pie-chart',
  templateUrl: './projects-pie-chart.component.html',
  styleUrl: './projects-pie-chart.component.css',
})
export class ProjectsPieChartComponent implements OnInit {
  public pieChart: any;
  constructor() {
    this.createChart();
  }
  ngOnInit(): void {
    // this.createChart;
  }
  // ===================================
  createChart() {
    this.pieChart = new Chart('PieChart', {
      type: 'pie', //this denotes tha type of chart

      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Pie Chart',
          },
        },
      },
    });
  }
}
