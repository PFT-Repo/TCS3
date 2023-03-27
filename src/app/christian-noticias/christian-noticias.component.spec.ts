import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristianNoticiasComponent } from './christian-noticias.component';

describe('ChristianNoticiasComponent', () => {
  let component: ChristianNoticiasComponent;
  let fixture: ComponentFixture<ChristianNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChristianNoticiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChristianNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
