import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardJoseComponent } from './card-jose.component';

describe('CardJoseComponent', () => {
  let component: CardJoseComponent;
  let fixture: ComponentFixture<CardJoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardJoseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardJoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
