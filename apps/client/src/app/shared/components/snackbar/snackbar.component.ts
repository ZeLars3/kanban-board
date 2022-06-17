import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, takeUntil, tap } from 'rxjs';

import { ISnackbar } from '@shared/models';
import { SnackbarService } from '@shared/services';
import { UnsubscribeDirective } from '@shared/directives';
import { SNACKBAR_TYPES_CLASS } from '@shared/constans';

@Component({
  selector: 'kanban-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnackbarComponent extends UnsubscribeDirective implements OnInit {
  public snackbars$: BehaviorSubject<ISnackbar[]> = new BehaviorSubject<ISnackbar[]>([]);

  constructor(private snackbarService: SnackbarService) {
    super();
  }

  public ngOnInit(): void {
    this.snackbarService.getSnackbars().pipe(
      tap((snackbars: ISnackbar[]) => {
        this.snackbars$.next(snackbars);
      }),
      takeUntil(this.ngUnsubscribe$)
    ).subscribe();
  }

  public removeSnackbar(snackbarId: string): void {
    this.snackbarService.removeSnackbar(snackbarId);
  }

  public getSnackbarClass(snackbar: ISnackbar): string {
    return SNACKBAR_TYPES_CLASS[snackbar.type];
  }
}
