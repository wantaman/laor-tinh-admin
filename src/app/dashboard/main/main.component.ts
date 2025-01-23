import { Component, ViewChild, OnInit } from '@angular/core';
import { AllService } from '@core/service/allApi.service';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexTooltip,
  ApexLegend,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @ViewChild('chart', { static: false }) chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;
  public chartOptions2!: Partial<ChartOptions>;
  public areaChartOptions!: Partial<ChartOptions>;

  // Initialize barChartOptions to avoid undefined errors
  public barChartOptions: Partial<ChartOptions> = {
    series: [],
    chart: {
      height: 400,
      type: 'bar',
      foreColor: '#9aa0ac',
    },
    colors: ['#6973c6'],
    plotOptions: {
      bar: {
        columnWidth: '60%',
      },
    },
    legend: {
      show: true,
    },
    tooltip: {
      theme: 'dark',
    },
    grid: {
      show: true,
    },
  };

  constructor(private allapi: AllService) {}

  ngOnInit() {
    // Delay the call to getChartData by 5 seconds
    setTimeout(() => {
      this.getChartData();
    }, 7000); // 5000 milliseconds = 5 seconds
  }
  

  getChartData() {
    this.allapi.getData(this.allapi.reportUrl).subscribe((response: any) => {
      this.barChartOptions.series = [
        {
          name: 'Actual',
          data: [
            { x: 'Roles', y: response.data.totalRoles },
            { x: 'Users', y: response.data.totalUsers },
            { x: 'Price', y: response.data.totalPrice },
            { x: 'Products', y: response.data.totalProducts },
            { x: 'Orders', y: response.data.totalOrders },
          ],
        },
      ];
    });
  }
}
