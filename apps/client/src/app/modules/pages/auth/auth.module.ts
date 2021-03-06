import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@app/material.module';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { GoogleAuthDirective } from './directives/google-auth.directive';
import { RegisterComponent } from './pages/register/register.component';
import { PasswordValidator } from './services';
import { ResetPasswordDialogComponent } from './components/reset-password-dialog/reset-password-dialog.component';

@NgModule({
  declarations: [
    LoginComponent,
    GoogleAuthDirective,
    RegisterComponent,
    ResetPasswordDialogComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FlexModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [
    PasswordValidator,
  ],
})
export class AuthModule {
}
