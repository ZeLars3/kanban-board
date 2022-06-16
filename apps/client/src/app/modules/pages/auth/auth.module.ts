import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@app/material.module';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { GoogleAuthDirective } from './pages/login/directives/google-auth.directive';

@NgModule({
  declarations: [
    LoginComponent,
    GoogleAuthDirective
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FlexModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class AuthModule {
}
