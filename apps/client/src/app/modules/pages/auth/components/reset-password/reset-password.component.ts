import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'kanban-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResetPasswordComponent {
  public email: FormControl = new FormControl('', [Validators.email]);
  public serverMessage: string;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private dialog: MatDialog,
  ) {
  }

  public resetPassword(): void {
    try {
      this.angularFireAuth.sendPasswordResetEmail(this.email.value).then(() => {
        this.serverMessage = 'Check your email for a link to reset your password.';
      });
    } catch (error) {
      this.serverMessage = error;
    }
    this.dialog.closeAll();
  }
}
