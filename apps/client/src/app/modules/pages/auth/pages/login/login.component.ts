import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { RouteAuthPaths, RoutePaths } from '@core/enums';

import { GOOGLE_ICON_LINK } from '../../constants';
import { ResetPasswordComponent } from '../../components/reset-password/reset-password.component';

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
  public serverMessage: string;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
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
      await this.router.navigate([this.routePath.Home]);
    } catch (error) {
      this.serverMessage = error.message;
    }
  }

  public openDialog(): void {
    this.dialog.open(ResetPasswordComponent);
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
}
