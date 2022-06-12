import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@app/material.module';

import { ShellComponent } from './shell.component';

@NgModule({
  declarations: [ShellComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [ShellComponent],
})
export class ShellModule {
}
