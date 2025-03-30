import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefenceSectionComponent } from './reference-section.component';

describe('RefenceSectionComponent', () => {
  let component: RefenceSectionComponent;
  let fixture: ComponentFixture<RefenceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefenceSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefenceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
