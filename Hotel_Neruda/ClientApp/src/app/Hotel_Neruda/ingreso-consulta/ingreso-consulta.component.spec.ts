import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoConsultaComponent } from './ingreso-consulta.component';

describe('IngresoConsultaComponent', () => {
  let component: IngresoConsultaComponent;
  let fixture: ComponentFixture<IngresoConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
