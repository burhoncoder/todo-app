import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BrowserStorageService {
  public get(key: string) {
    return localStorage.getItem(key) || '';
  }

  public set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getUserId() {
    return Number(localStorage.getItem('userId')) || 0;
  }

  public setUserId(userId: number) {
    localStorage.setItem('userId', String(userId));
  }

  public getToken() {
    return localStorage.getItem('token') || '';
  }

  public setToken(token: string) {
    localStorage.setItem('token', token);
  }
}
