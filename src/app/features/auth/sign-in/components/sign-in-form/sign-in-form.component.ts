import { Component, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import {
  BrowserStorageService,
  FormUtilitiesService,
  LoaderService,
} from '@shared/services';
import { ButtonComponent, InputComponent } from '@shared/components';

import { SignInService } from '../../model/sign-in.service';
import { ISignInForm } from '../../model/sign-in.types';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-sign-in-form',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.scss',
})
export class SignInFormComponent {
  signInForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private destroyRef: DestroyRef,
    private formBuilder: FormBuilder,
    private router: Router,
    private signInService: SignInService,
    private broswerStorage: BrowserStorageService,
    public formUtilities: FormUtilitiesService,
    public loader: LoaderService
  ) {}

  handleSignIn() {
    const formValue: ISignInForm = this.signInForm.value;
    this.loader.setLoading();
    this.signInService
      .signIn(formValue)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.loader.setLoaded())
      )
      .subscribe({
        next: response => {
          this.broswerStorage.setToken(response.token);
          this.broswerStorage.setUserId(response.userId);
          this.router.navigate(['/todos', 'list']);
        },
      });
  }
}
