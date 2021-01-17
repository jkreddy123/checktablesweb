import { TablesloginPageComponent } from './tableslogin-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ {path:'',component:TablesloginPageComponent,data:{shouldReuse:true,key:'tableslogin'}},  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesloginPageRoutingModule { }
