import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoAndAboutComponent } from './photo-and-about.component';

describe('PhotoAndAboutComponent', () => {
  let component: PhotoAndAboutComponent;
  let fixture: ComponentFixture<PhotoAndAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoAndAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoAndAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
