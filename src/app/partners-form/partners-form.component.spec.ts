import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersFormComponent } from './partners-form.component';

describe('PartnersFormComponent', () => {
  let component: PartnersFormComponent;
  let fixture: ComponentFixture<PartnersFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnersFormComponent]
    });
    fixture = TestBed.createComponent(PartnersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
