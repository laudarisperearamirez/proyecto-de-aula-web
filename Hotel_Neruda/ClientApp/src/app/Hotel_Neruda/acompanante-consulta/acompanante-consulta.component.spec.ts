import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompananteConsultaComponent } from './acompanante-consulta.component';

describe('AcompananteConsultaComponent', () => {
  let component: AcompananteConsultaComponent;
  let fixture: ComponentFixture<AcompananteConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcompananteConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcompananteConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
