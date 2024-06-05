import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { ToastService } from '@shared/services';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent implements OnInit {
  message = '';

  constructor(
    private destroyRef: DestroyRef,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.toastService.toast$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(message => {
        this.message = message;
        if (message) setTimeout(() => this.toastService.clearToast(), 3000);
      });
  }
}
