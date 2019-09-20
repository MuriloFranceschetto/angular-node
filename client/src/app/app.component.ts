import { AuthGuard } from './guards/auth-guard';
import { AuthService } from './authentication/login/auth.service';
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
              public authService: AuthService,
              public uthGuard: AuthGuard) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.MobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.MobileQueryListener);

  }

  ngOnInit(): void {
    this.authService.salvaValorAcessado();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.MobileQueryListener);
  }

  deslogar() {
    this.authService.deslogar();
  }

  MostrarLoginHome() {
    this.authService.MostrarLoginHome();
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

}

