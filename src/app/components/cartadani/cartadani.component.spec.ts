import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartadaniComponent } from './cartadani.component';

describe('CartadaniComponent', () => {
  let component: CartadaniComponent;
  let fixture: ComponentFixture<CartadaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartadaniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartadaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
