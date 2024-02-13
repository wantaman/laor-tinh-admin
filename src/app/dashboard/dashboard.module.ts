import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { NgChartsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MainComponent, Dashboard2Component, Dashboard3Component],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    FullCalendarModule,
    NgApexchartsModule,
    NgScrollbarModule,
    SharedModule,
  ],
})
export class DashboardModule {}
