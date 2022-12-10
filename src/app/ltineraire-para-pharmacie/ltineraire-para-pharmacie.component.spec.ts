import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtineraireParaPharmacieComponent } from './ltineraire-para-pharmacie.component';

describe('LtineraireParaPharmacieComponent', () => {
  let component: LtineraireParaPharmacieComponent;
  let fixture: ComponentFixture<LtineraireParaPharmacieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtineraireParaPharmacieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LtineraireParaPharmacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
