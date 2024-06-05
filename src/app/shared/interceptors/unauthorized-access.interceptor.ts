import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

export const unauthorizedAccessInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    tap({
      error: error => {
        if (error.status === 401) router.navigate(['/auth', 'sign-in']);
      },
    })
  );
};
