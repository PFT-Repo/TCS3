import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiguelEarthquakesPageComponent } from './miguel-earthquakes-page.component';

describe('MiguelEarthquakesPageComponent', () => {
  let component: MiguelEarthquakesPageComponent;
  let fixture: ComponentFixture<MiguelEarthquakesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiguelEarthquakesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiguelEarthquakesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
