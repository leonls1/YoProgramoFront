import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaContactosV2Component } from './lista-contactos-v2.component';

describe('ListaContactosV2Component', () => {
  let component: ListaContactosV2Component;
  let fixture: ComponentFixture<ListaContactosV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaContactosV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaContactosV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
