import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@app/material.module';

import { KanbanRoutingModule } from './kanban-routing.module';
import { BoardService } from './services';
import { BoardComponent } from './components/board/board.component';
import { BoardListComponent } from './components/board-list/board-list.component'

@NgModule({
  declarations: [
    BoardComponent,
    BoardListComponent
  ],
  imports: [
    CommonModule,
    KanbanRoutingModule,
    MaterialModule,
  ],
  providers: [
    BoardService,
  ],
})
export class KanbanModule { }
