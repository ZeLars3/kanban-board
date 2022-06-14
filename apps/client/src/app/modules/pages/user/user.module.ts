import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@app/material.module';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { GoogleAuthDirective } from './pages/login/directives/google-auth.directive';

@NgModule({
  declarations: [
    LoginComponent,
    GoogleAuthDirective
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
  ],
})
export class UserModule { }
