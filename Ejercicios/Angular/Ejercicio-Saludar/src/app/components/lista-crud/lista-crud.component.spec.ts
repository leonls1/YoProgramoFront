import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCrudComponent } from './lista-crud.component';

describe('ListaCrudComponent', () => {
  let component: ListaCrudComponent;
  let fixture: ComponentFixture<ListaCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
