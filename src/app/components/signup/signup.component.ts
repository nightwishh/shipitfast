import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MlPipe } from '../../pipes/ml.pipe';
import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
  provideHttpClient,
} from '@angular/common/http';
import { Credentials } from '../models/credentials.model';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, MlPipe, HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AuthService],
})
export class SignupComponent {
  userDetails: Credentials = new Credentials();
  constructor(private authService: AuthService, private router: Router) {}
  onSignUp() {
    this.authService.register(this.userDetails).subscribe((res: any) => {
      if (res.status == 0) {
        this.router.navigate(['/login']);
      }
    });
  }
}
