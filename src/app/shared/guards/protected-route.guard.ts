import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { BrowserStorageService } from '@shared/services';

export const protectedRouteGuard: CanActivateFn = () => {
  const router = inject(Router);
  const browserStorage = inject(BrowserStorageService);

  const isAuthenticated =
    !!browserStorage.getToken() && !!browserStorage.getUserId();

  if (!isAuthenticated) {
    router.navigate(['/auth', 'sign-in']);
  }

  return isAuthenticated;
};
