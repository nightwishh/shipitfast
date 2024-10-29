import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Credentials, LoginCredentials } from '../models/credentials.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}
  register(credentials: Credentials) {
    if (credentials.password != credentials.confirmPassword)
      return new Observable();
    return this.http.post(environment.apiUrl + '/register', credentials);
  }
  signIn(credentials: LoginCredentials) {
    if (!credentials.email || !credentials.password) return new Observable();
    return this.http.post(environment.apiUrl + '/login', credentials);
  }
  signOut() {}
}
