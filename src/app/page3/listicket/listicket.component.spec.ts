import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListicketComponent } from './listicket.component';

describe('ListicketComponent', () => {
  let component: ListicketComponent;
  let fixture: ComponentFixture<ListicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListicketComponent]
    });
    fixture = TestBed.createComponent(ListicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
