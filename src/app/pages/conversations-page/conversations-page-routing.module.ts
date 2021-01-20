import { ConversationsPageComponent } from './conversations-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [ {path:'',component:ConversationsPageComponent,data:{shouldReuse:true,key:'conversations'}},  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConversationsPageRoutingModule { }
