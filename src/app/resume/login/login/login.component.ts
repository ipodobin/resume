import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  signInWithEmail() {
    const cred = {
      email: this.user.email,
      password: this.user.password
    };
    this.authService.login(cred)
      .then((res) => {
        this.router.navigate(['edit']);
      })
      .catch((err) => console.log('error: ' + err));
  }

}
