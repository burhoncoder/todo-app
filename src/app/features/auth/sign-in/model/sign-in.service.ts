import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { signInMapper } from './sign-in.mapper';
import { ISignInForm } from './sign-in.types';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  constructor(private httpClient: HttpClient) {}

  signIn(dto: ISignInForm) {
    return this.httpClient
      .post('/auth/token/login/', dto)
      .pipe(map(signInMapper.mapToSignInResponse));
  }
}
