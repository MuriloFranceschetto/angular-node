
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../login/auth.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(
    private authService: AuthService,
    private homeService: HomeService,
  ) { }

  ngOnInit() {
    this.authService.MostrarLoginHome();
  }

}
