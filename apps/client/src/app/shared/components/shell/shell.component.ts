import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable, shareReplay, map } from 'rxjs';

@Component({
  selector: 'kanban-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {
  public isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset]).pipe(
    map((result: BreakpointState) => result.matches),
    shareReplay(),
  );

  constructor(private breakpointObserver: BreakpointObserver) {
  }
}
