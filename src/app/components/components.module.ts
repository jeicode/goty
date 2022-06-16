import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalBarChartComponent } from './horizontal-bar-chart/horizontal-bar-chart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    HorizontalBarChartComponent,
    NavbarComponent
  ],
  exports: [
    NavbarComponent,
    HorizontalBarChartComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule,
    BrowserAnimationsModule 
  ]
})
export class ComponentsModule { }
