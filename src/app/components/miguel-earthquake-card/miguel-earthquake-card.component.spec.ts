import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiguelEarthquakeCardComponent } from './miguel-earthquake-card.component';

describe('MiguelEarthquakeCardComponent', () => {
  let component: MiguelEarthquakeCardComponent;
  let fixture: ComponentFixture<MiguelEarthquakeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiguelEarthquakeCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiguelEarthquakeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
