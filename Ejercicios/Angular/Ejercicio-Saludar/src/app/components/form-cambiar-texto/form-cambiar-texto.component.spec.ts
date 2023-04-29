import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCambiarTextoComponent } from './form-cambiar-texto.component';

describe('FormCambiarTextoComponent', () => {
  let component: FormCambiarTextoComponent;
  let fixture: ComponentFixture<FormCambiarTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCambiarTextoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCambiarTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
