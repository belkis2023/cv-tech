import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiniCv } from './mini-cv';

describe('MiniCv', () => {
  let component: MiniCv;
  let fixture: ComponentFixture<MiniCv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniCv],
    }).compileComponents();

    fixture = TestBed.createComponent(MiniCv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
