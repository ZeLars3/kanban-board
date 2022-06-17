import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@app/material.module';
import { SharedModule } from '@shared/shared.module';

import { SnackbarComponent } from './snackbar.component';

@NgModule({
  declarations: [SnackbarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
  ],
  exports: [
    SnackbarComponent,
  ],
})
export class SnackbarModule {
}
