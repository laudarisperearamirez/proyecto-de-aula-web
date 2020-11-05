import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompananteRegistroComponent } from './acompanante-registro.component';

describe('AcompananteRegistroComponent', () => {
  let component: AcompananteRegistroComponent;
  let fixture: ComponentFixture<AcompananteRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcompananteRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcompananteRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
