import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPopupComponent } from './contact-popup.component';

describe('ModalComponent', () => {
  let component: ContactPopupComponent;
  let fixture: ComponentFixture<ContactPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
