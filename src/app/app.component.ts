import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ToastComponent } from '@shared/components';

import { AuthModule } from './features/auth/auth.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthModule, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
