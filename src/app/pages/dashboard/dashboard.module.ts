import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared.modulo';
import { CustomizerSettingsService } from 'src/app/components/customizer-settings/customizer-settings.service';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
   providers: [CustomizerSettingsService]
})
export class DashboardModule { }
