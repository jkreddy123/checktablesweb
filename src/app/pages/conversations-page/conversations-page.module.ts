import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversationsPageRoutingModule } from './conversations-page-routing.module';
import { ConversationsPageComponent } from './conversations-page.component';


@NgModule({
  declarations: [ConversationsPageComponent],
  imports: [
    CommonModule,
    ConversationsPageRoutingModule
  ]
})
export class ConversationsPageModule { }
