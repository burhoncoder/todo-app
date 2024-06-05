import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  isLoading = false;

  setLoading() {
    this.isLoading = true;
  }

  setLoaded() {
    this.isLoading = false;
  }
}
