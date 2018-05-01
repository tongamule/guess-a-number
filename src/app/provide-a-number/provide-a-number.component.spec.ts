import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvideANumberComponent } from './provide-a-number.component';

describe('ProvideANumberComponent', () => {
  let component: ProvideANumberComponent;
  let fixture: ComponentFixture<ProvideANumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvideANumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvideANumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
