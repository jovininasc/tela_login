import { Component, OnInit } from '@angular/core';
import { PathService } from 'src/app/services/path.service';
import * as firebase from 'firebase';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private pathService: PathService) { }

  ngOnInit(): void {
  }

  loginGoogle(): void {
    this.pathService.login(new firebase.default.auth.GoogleAuthProvider());

  }


  loginFacebook(): void {
    this.pathService.login(new firebase.default.auth.FacebookAuthProvider());
  }

  loginEmail(): void {
    this.pathService.login(new firebase.default.auth.EmailAuthProvider());
  }

}
