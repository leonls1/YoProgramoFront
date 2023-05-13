import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNombresV1Component } from './lista-nombres-v1.component';

describe('ListaNombresV1Component', () => {
  let component: ListaNombresV1Component;
  let fixture: ComponentFixture<ListaNombresV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaNombresV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaNombresV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
