import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { GOOGLE_ICON_LINK } from './constans';

@Component({
  selector: 'kanban-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  public userState = this.angularFireAuth.authState;
  public googleIcon: string = GOOGLE_ICON_LINK;

  constructor(private angularFireAuth: AngularFireAuth) { }

  public signOut(): void {
    this.angularFireAuth.signOut();
  }
}
