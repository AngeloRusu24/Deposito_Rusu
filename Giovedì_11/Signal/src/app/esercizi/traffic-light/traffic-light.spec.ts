import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficLight } from './traffic-light';

describe('TrafficLight', () => {
  let component: TrafficLight;
  let fixture: ComponentFixture<TrafficLight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrafficLight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrafficLight);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
