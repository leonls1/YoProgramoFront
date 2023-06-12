import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectNewComponent } from './proyect-new.component';

describe('ProyectNewComponent', () => {
  let component: ProyectNewComponent;
  let fixture: ComponentFixture<ProyectNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
