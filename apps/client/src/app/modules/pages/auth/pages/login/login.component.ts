import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { GOOGLE_ICON_LINK } from './constans';

@Component({
  selector: 'kanban-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  public userState = this.angularFireAuth.authState;
  public googleIcon: string = GOOGLE_ICON_LINK;
  public form: FormGroup;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
  }

  public ngOnInit(): void {
    this.initForm();
  }

  public signOut(): void {
    this.angularFireAuth.signOut();
  }

  public submit(): void {
    this.router.navigate(['/']);
    console.log(this.form.value);
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
}
