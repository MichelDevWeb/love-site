import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValentineComponent } from './valentine.component';

describe('ValentineComponent', () => {
  let component: ValentineComponent;
  let fixture: ComponentFixture<ValentineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValentineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValentineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
