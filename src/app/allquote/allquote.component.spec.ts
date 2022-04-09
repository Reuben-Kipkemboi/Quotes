import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllquoteComponent } from './allquote.component';

describe('AllquoteComponent', () => {
  let component: AllquoteComponent;
  let fixture: ComponentFixture<AllquoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllquoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
