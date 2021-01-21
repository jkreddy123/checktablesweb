import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule, MatTableDataSource} from '@angular/material';

import { ConversationsPageRoutingModule } from './conversations-page-routing.module';
import { ConversationsPageComponent } from './conversations-page.component';


@NgModule({
  declarations: [ConversationsPageComponent],
  imports: [
    CommonModule,
    ConversationsPageRoutingModule,
    MatTableModule, 

  ]
})
export class ConversationsPageModule { }
