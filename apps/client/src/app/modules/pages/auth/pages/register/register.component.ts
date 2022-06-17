import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat';

import { RoutePaths } from '@core/enums';
import { SnackbarService } from '@shared/services';

import { PasswordValidator } from '../../services';
import { MAX_USERNAME_LENGTH, MIN_USERNAME_LENGTH } from '../../constants';

import UserCredential = firebase.auth.UserCredential;

@Component({
  selector: 'kanban-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  public routePath = RoutePaths;
  public minUsernameLength: number = MIN_USERNAME_LENGTH;
  public maxUsernameLength: number = MAX_USERNAME_LENGTH;

  constructor(
    private formBuilder: FormBuilder,
    private passwordValidator: PasswordValidator,
    private angularFireAuth: AngularFireAuth,
    private router: Router,
    private snackbarService: SnackbarService,
  ) {
  }

  public ngOnInit(): void {
    this.initForm();
  }

  public async submit(): Promise<void> {
    const {email, password} = this.form.value;

    try {
      await this.angularFireAuth.createUserWithEmailAndPassword(email, password).then((result: UserCredential) => {
        this.snackbarService.createSuccessSnackbar('Please check your email to verify your account.');
        result.user.sendEmailVerification();
      });
      this.snackbarService.createSuccessSnackbar('Successfully registered');
      await this.router.navigate([this.routePath.Home]);
    } catch (error) {
      this.snackbarService.createErrorSnackbar(error.code);
    }
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
        username: ['',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: ['',
          [
            Validators.required,
            Validators.minLength(8)
          ]
        ],
        confirmPassword: ['',
          [
            Validators.required,
            Validators.minLength(8)
          ]
        ],
      },
      {
        validator: this.passwordValidator.validatePassword('password', 'confirmPassword'),
      });
  }
}
