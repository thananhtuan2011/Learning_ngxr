import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService ) { }

  ngOnInit(): void {
  }

  login()
  {

      this.auth.LoginWithGoogle();

  }

  logout()
  {
    
  }

}
