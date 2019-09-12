
import { Component, OnInit } from '@angular/core';

import { LoginService } from '../login/login.service';
import { HomeService } from './home.service';

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
