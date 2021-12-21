import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SibligComponent } from './siblig.component';

describe('SibligComponent', () => {
  let component: SibligComponent;
  let fixture: ComponentFixture<SibligComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SibligComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SibligComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
