import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinePartComponent } from './timeline-part.component';

describe('TimelinePartComponent', () => {
  let component: TimelinePartComponent;
  let fixture: ComponentFixture<TimelinePartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelinePartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelinePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
