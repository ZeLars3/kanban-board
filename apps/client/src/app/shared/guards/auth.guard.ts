import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

import { RoutePaths } from '@core/enums';
import { SnackbarService } from '@shared/services';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private angularFireAuth: AngularFireAuth,
    private snackbarService: SnackbarService,
    private router: Router,
  ) {
  }

  public async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {

    const user = await this.angularFireAuth.currentUser;
    const isLoggedIn = !!user;

    if (!isLoggedIn) {
      this.router.navigate([RoutePaths.Login]).then(() => {
        this.snackbarService.createErrorSnackbar('You must be logged in to access this page.');
      });
    }


    return isLoggedIn;
  }
}
