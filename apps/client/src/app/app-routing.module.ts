import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { RoutePaths } from '@core/enums';
import { AuthGuard } from '@shared/guards';

const routes: Routes = [
  {
    path: '',
    redirectTo: RoutePaths.Login,
    pathMatch: 'full'
  },
  {
    path: RoutePaths.Home,
    loadChildren: () => import('./modules/pages/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: RoutePaths.Login,
    loadChildren: () => import('./modules/pages/auth/auth.module').then(m => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
