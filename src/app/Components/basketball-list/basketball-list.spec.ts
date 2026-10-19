import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasketballList } from './basketball-list';

describe('BasketballList', () => {
  let component: BasketballList;
  let fixture: ComponentFixture<BasketballList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasketballList],
    }).compileComponents();

    fixture = TestBed.createComponent(BasketballList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
