import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAddressFormComponent } from './custom-address-form.component';

describe('CustomAddressFormComponent', () => {
  let component: CustomAddressFormComponent;
  let fixture: ComponentFixture<CustomAddressFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomAddressFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
