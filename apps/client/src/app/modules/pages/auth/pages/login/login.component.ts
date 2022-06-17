import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { RouteAuthPaths, RoutePaths } from '@core/enums';
import { SnackbarService } from '@shared/services';

import { GOOGLE_ICON_LINK } from '../../constants';
import { ResetPasswordDialogComponent } from '../../components/reset-password-dialog/reset-password-dialog.component';

@Component({
  selector: 'kanban-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  public userState = this.angularFireAuth.authState;
  public googleIcon: string = GOOGLE_ICON_LINK;
  public form: FormGroup;
  public routeAuthPath = RouteAuthPaths;
  public routePath = RoutePaths;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    private snackbarService: SnackbarService,
  ) {
  }

  public ngOnInit(): void {
    this.initForm();
  }

  public signOut(): void {
    this.angularFireAuth.signOut();
  }

  public async submit(): Promise<void> {
    const {email, password} = this.form.value;

    try {
      await this.angularFireAuth.signInWithEmailAndPassword(email, password);
      this.snackbarService.createSuccessSnackbar('Successfully logged in');
      await this.router.navigate([this.routePath.Home]);
    } catch (error) {
      this.snackbarService.createErrorSnackbar(error.code);
    }
  }

  public openDialog(): void {
    this.dialog.open(ResetPasswordDialogComponent);
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
}
