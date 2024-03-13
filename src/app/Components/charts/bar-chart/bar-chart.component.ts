import { Component, OnInit } from '@angular/core';
// import { Chart } from 'chart.js';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css',
})
export class BarChartComponent implements OnInit {
  public chart: any;

  constructor() {
    // this.createChart();
  }
  ngOnInit(): void {
    this.createChart();
  }

  //
  createChart() {
    let delayed: any;

    this.chart = new Chart('MyChart', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: [
          '2024-03-1',
          '2024-03-2',
          '2024-03-3',
          '2024-03-4',
          '2024-03-5',
          '2024-03-6',
          '2024-03-7',
          '2024-03-8',
        ],
        datasets: [
          {
            label: 'projects',
            data: ['10', '12', '8', '4', '8', '6', '12', '2'],
            backgroundColor: '#EE4266',
          },
          {
            label: 'offers',
            data: ['40', '55', '30', '22', '35', '18', '45', '10'],
            backgroundColor: '#5E1675',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,

        animation: {
          onComplete: () => {
            delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (
              context.type === 'data' &&
              context.mode === 'default' &&
              !delayed
            ) {
              delay = context.dataIndex * 700 + context.datasetIndex * 300;
            }
            return delay;
          },
        },
        // scales: {
        //   x: {
        //     stacked: true,
        //   },
        //   y: {
        //     stacked: true,
        //   },
        // },
      },
    });
  }
}
