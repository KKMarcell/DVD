import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvdsAndVideosComponent } from './dvds-and-videos.component';

describe('DvdsAndVideosComponent', () => {
  let component: DvdsAndVideosComponent;
  let fixture: ComponentFixture<DvdsAndVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DvdsAndVideosComponent]
    });
    fixture = TestBed.createComponent(DvdsAndVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
