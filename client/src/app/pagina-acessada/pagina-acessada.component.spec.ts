import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAcessadaComponent } from './pagina-acessada.component';

describe('PaginaAcessadaComponent', () => {
  let component: PaginaAcessadaComponent;
  let fixture: ComponentFixture<PaginaAcessadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaAcessadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaAcessadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
