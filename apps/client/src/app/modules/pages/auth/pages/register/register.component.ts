import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

import { RouteAuthPaths } from '@core/enums';

import { PasswordValidator } from '../../services';
import { MAX_USERNAME_LENGTH, MIN_USERNAME_LENGTH } from '../../constants';

@Component({
  selector: 'kanban-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  public routePaths = RouteAuthPaths;
  public serverMessage: string;
  public minUsernameLength: number = MIN_USERNAME_LENGTH;
  public maxUsernameLength: number = MAX_USERNAME_LENGTH;

  constructor(
    private formBuilder: FormBuilder,
    private passwordValidator: PasswordValidator,
    private angularFireAuth: AngularFireAuth,
    private router: Router,
  ) {
  }

  public ngOnInit(): void {
    this.initForm();
  }

  public async submit(): Promise<void> {
    const {email, password} = this.form.value;

    try {
      await this.angularFireAuth.createUserWithEmailAndPassword(email, password);
      await this.router.navigate(['/']);
    } catch (error) {
      this.serverMessage = error;
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
