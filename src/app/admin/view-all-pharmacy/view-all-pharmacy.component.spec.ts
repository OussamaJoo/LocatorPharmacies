import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllPharmacyComponent } from './view-all-pharmacy.component';

describe('ViewAllPharmacyComponent', () => {
  let component: ViewAllPharmacyComponent;
  let fixture: ComponentFixture<ViewAllPharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllPharmacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllPharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
