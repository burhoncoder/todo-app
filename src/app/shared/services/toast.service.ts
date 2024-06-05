import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastSubject = new BehaviorSubject<string>('');
  public toast$ = this.toastSubject.asObservable();

  showToast(message: string) {
    this.toastSubject.next(message);
  }

  clearToast() {
    this.toastSubject.next('');
  }
}
