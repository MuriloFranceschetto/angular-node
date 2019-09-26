
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AuthService } from '../authentication/login/auth.service';
=======

import { LoginService } from '../login/login.service';
import { HomeService } from './home.service';
>>>>>>> e779fb98a563032780700a95b0ab283d44b0196e

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(
    private loginService: LoginService,
    private homeService: HomeService,
  ) { }

  ngOnInit() {
    this.loginService.MostrarLoginHome();
  }

}
