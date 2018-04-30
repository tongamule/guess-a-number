import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessANumberComponent } from './guess-a-number.component';

describe('GuessANumberComponent', () => {
  let component: GuessANumberComponent;
  let fixture: ComponentFixture<GuessANumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuessANumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessANumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
