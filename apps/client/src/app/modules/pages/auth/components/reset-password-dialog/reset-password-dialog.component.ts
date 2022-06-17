import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialog } from '@angular/material/dialog';

import { SnackbarService } from '@shared/services';

@Component({
  selector: 'kanban-reset-password-dialog',
  templateUrl: './reset-password-dialog.component.html',
  styleUrls: ['./reset-password-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResetPasswordDialogComponent {
  public email: FormControl = new FormControl('', [Validators.email]);

  constructor(
    private angularFireAuth: AngularFireAuth,
    private dialog: MatDialog,
    private snackbarService: SnackbarService,
  ) {
  }

  public resetPassword(): void {
    try {
      this.angularFireAuth.sendPasswordResetEmail(this.email.value).then(() => {
        this.snackbarService.creteInfoSnackbar('Please check your email');
      });
    } catch (error) {
      this.snackbarService.createErrorSnackbar(error.code);
    }
    this.dialog.closeAll();
  }
}
