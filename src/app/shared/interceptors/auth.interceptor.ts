import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { BrowserStorageService } from '@shared/services';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = inject(BrowserStorageService).get('token');

  const newReq = authToken
    ? req.clone({
        headers: new HttpHeaders({
          Authorization: `Token ${authToken}`,
        }),
      })
    : req;

  return next(newReq);
};
