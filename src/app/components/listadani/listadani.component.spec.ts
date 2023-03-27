import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadaniComponent } from './listadani.component';

describe('ListadaniComponent', () => {
  let component: ListadaniComponent;
  let fixture: ComponentFixture<ListadaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadaniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
