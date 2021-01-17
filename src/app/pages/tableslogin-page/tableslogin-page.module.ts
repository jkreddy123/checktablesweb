import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesloginPageRoutingModule } from './tableslogin-page-routing.module';
import { TablesloginPageComponent } from './tableslogin-page.component';


@NgModule({
  declarations: [TablesloginPageComponent],
  imports: [
    CommonModule,
    TablesloginPageRoutingModule
  ]
})
export class TablesloginPageModule { }
