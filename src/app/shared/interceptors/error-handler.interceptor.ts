import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';

import { ToastService } from '@shared/services';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService = inject(ToastService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      toastService.showToast(error.error?.message || JSON.stringify(error));
      return EMPTY;
    })
  );
};
