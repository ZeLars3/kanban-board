import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { takeUntil, tap } from 'rxjs';

import { UnsubscribeDirective } from '@shared/directives';

import { IBoard } from '../../models'
import { BoardService } from '../../services';

@Component({
  selector: 'kanban-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardListComponent extends UnsubscribeDirective implements OnInit {
  public boards: IBoard[];

  constructor(public boardService: BoardService) {
    super();
  }

  public ngOnInit(): void {
    this.boardService.getUserBoards().pipe(
      tap(boards => this.boards = boards),
      takeUntil(this.ngUnsubscribe$)
    ).subscribe();
  }

  public drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.boards, event.previousIndex, event.currentIndex);
    this.boardService.sortBoards(this.boards);
  }
}
