import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutquoteComponent } from './aboutquote.component';

describe('AboutquoteComponent', () => {
  let component: AboutquoteComponent;
  let fixture: ComponentFixture<AboutquoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutquoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
