import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CvDetailsPage } from './cv-details-page';

describe('CvDetailsPage', () => {
  let component: CvDetailsPage;
  let fixture: ComponentFixture<CvDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvDetailsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CvDetailsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
