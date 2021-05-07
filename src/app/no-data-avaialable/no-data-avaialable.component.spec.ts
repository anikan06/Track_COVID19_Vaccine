import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDataAvaialableComponent } from './no-data-avaialable.component';

describe('NoDataAvaialableComponent', () => {
  let component: NoDataAvaialableComponent;
  let fixture: ComponentFixture<NoDataAvaialableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoDataAvaialableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoDataAvaialableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
