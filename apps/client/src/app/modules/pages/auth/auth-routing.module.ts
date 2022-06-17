import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouteAuthPaths } from '@core/enums';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: RouteAuthPaths.Register,
    component: RegisterComponent,
    title: 'Registration',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
