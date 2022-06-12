import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable, shareReplay, map } from 'rxjs';

import { NAV_ITEMS } from './constans';
import { IDropDownItem, INavItem } from './models';
import { DROP_DOWN_MENU_ITEMS } from './constans/drop-down-menu';

@Component({
  selector: 'kanban-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {
  public navItems: INavItem[] = NAV_ITEMS;
  public dropdownItems: IDropDownItem[] = DROP_DOWN_MENU_ITEMS;
  public isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset]).pipe(
    map((result: BreakpointState) => result.matches),
    shareReplay(),
  );

  constructor(private breakpointObserver: BreakpointObserver) {
  }
}
