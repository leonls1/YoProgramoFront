import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoComponente1Component } from './nuevo-componente1.component';

describe('NuevoComponente1Component', () => {
  let component: NuevoComponente1Component;
  let fixture: ComponentFixture<NuevoComponente1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoComponente1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoComponente1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
