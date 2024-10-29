import { User } from './user.model';

export class Credentials extends User {
  password: string = '';
  confirmPassword: string = '';
}
export class LoginCredentials {
  email: string = '';
  password: string = '';
}
