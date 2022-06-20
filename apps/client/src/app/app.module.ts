import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SnackbarModule } from '@components/snackbar/snackbar.module';
import { environment } from '@environments/environment';
import { AuthModule } from '@pages/auth/auth.module';
import { SharedModule } from '@shared/shared.module';
import { SnackbarService } from '@shared/services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from '@shared/guards';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    SnackbarModule,
  ],
  providers: [
    SnackbarService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
