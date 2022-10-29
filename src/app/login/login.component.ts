import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../shared/interfaces/auth.interface';
import { AuthService } from '../shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userInfo: UserInfo = {
    login: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

   async login(userInfo: UserInfo) {
     await this.authService.login(userInfo);
  }
}
