import { AuthGuard } from './guards/auth-guard';
<<<<<<< HEAD
import { AuthService } from './authentication/login/auth.service';
=======
import { LoginService } from './login/login.service';
>>>>>>> e779fb98a563032780700a95b0ab283d44b0196e
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  mobileQuery: MediaQueryList;

  palavra: string;

  private MobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              public loginService: LoginService,
              public authGuard: AuthGuard) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.MobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.MobileQueryListener);

  }

  ngOnInit(): void {
    this.loginService.salvaValorAcessado();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.MobileQueryListener);
  }

  deslogar() {
    this.loginService.deslogar();
  }

  MostrarLoginHome() {
    this.loginService.MostrarLoginHome();
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

}

