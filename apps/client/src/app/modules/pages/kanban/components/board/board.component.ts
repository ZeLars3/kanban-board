import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { BoardService } from '../../services';

@Component({
  selector: 'kanban-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardComponent {
  @Input() public board;

  constructor(private boardService: BoardService) {
  }

  public taskDrop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.board.tasks, event.previousIndex, event.currentIndex);
    this.boardService.updateTasks(this.board.id, this.board.tasks);
  }
}
