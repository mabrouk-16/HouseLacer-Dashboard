import { Component } from '@angular/core';
import {
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexNonAxisChartSeries,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

@Component({
  selector: 'app-projects-pie-chart',
  templateUrl: './projects-pie-chart.component.html',
  styleUrl: './projects-pie-chart.component.css',
})
export class ProjectsPieChartComponent {
  genderTitle: ApexTitleSubtitle = {
    text: 'Gender',
  };
  genderSeries: ApexNonAxisChartSeries = [65, 35];
  genderColors = ['#124076', '#F7418F'];

  genderDetails: ApexChart = {
    type: 'pie',
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 1,
      color: '#000',
      opacity: 0.35,
    },
  };
  genderLabels = ['Males', 'Females '];
  genderDataLabels: ApexDataLabels = { enabled: false };

  // -------------******************************************************************

  userTitle: ApexTitleSubtitle = {
    text: 'Users',
  };
  userSeries: ApexNonAxisChartSeries = [55, 35, 10];
  userColors = ['#F44336', '#E91E63', '#9C27B0'];

  userDetails: ApexChart = {
    type: 'donut',
    toolbar: {
      show: true,
    },
  };
  userLabels = ['Designers ', 'users', 'Admins'];
  // userColor: ApexFill = {
  //   colors: ['#F44336', '#E91E63', '#9C27B0'],
  // };
}
