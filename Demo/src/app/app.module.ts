import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxNavBarModule } from 'devextreme-angular';
import { DxPieChartModule } from 'devextreme-angular';
import { DxChartModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialFlowComponent } from './material-flow/material-flow.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MaterialFlowComponent
  ],
  imports: [
    BrowserModule,
    DxNavBarModule,
    DxPieChartModule,
    DxChartModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
