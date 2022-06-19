import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable, shareReplay, map } from 'rxjs';

import { RoutePaths } from '@core/enums';

import { NAV_ITEMS } from './constans';
import { INavItem } from './models';
import { DROP_DOWN_MENU_ITEMS } from './constans/drop-down-menu';

@Component({
  selector: 'kanban-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {
  public navItems: INavItem[] = NAV_ITEMS;
  public dropdownItems: INavItem[] = DROP_DOWN_MENU_ITEMS;
  public routePath = RoutePaths;
  public isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset]).pipe(
    map((result: BreakpointState) => result.matches),
    shareReplay(),
  );

  constructor(private breakpointObserver: BreakpointObserver) {
  }
}
