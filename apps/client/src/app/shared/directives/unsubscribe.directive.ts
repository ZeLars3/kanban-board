import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[kanbanUnsubscribe]'
})
export class UnsubscribeDirective implements OnDestroy {
  public ngUnsubscribe$: Subject<void> = new Subject<void>();

  public ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
