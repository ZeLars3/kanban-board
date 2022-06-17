import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '@app/material.module';

import { ShellModule } from './components/shell/shell.module';
import { UnsubscribeDirective } from './directives';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

@NgModule({
  declarations: [UnsubscribeDirective, SafeHtmlPipe],
  imports: [
    CommonModule,
    MaterialModule,
    ShellModule,
  ],
  exports: [
    MaterialModule,
    ShellModule,
    SafeHtmlPipe,
  ],
})
export class SharedModule {
}
