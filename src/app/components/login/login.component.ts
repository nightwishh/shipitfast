import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Credentials, LoginCredentials } from '../models/credentials.model';
@Component({
  selector: 'login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthService],
})
export class LoginComponent {
  userDetails: LoginCredentials = new LoginCredentials();
  constructor(private authService: AuthService) {}
  onSignIn() {
    // this.authService.register(this.userDetails).subscribe((res: any) => {
    //   if (res.status == 0) {
    //     this.router.navigate(['/login']);
    //   }
    // });
  }
}
