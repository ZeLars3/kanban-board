import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '@app/material.module';

import { ShellModule } from './components/shell/shell.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    ShellModule,
  ],
  exports: [
    MaterialModule,
    ShellModule,
  ],
})
export class SharedModule {
}
