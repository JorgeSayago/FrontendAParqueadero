import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLugarParqueaderoComponent } from './lista-lugar-parqueadero.component';

describe('ListaLugarParqueaderoComponent', () => {
  let component: ListaLugarParqueaderoComponent;
  let fixture: ComponentFixture<ListaLugarParqueaderoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaLugarParqueaderoComponent]
    });
    fixture = TestBed.createComponent(ListaLugarParqueaderoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
