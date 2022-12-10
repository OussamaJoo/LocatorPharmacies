import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtineraireComponent } from './ltineraire.component';

describe('LtineraireComponent', () => {
  let component: LtineraireComponent;
  let fixture: ComponentFixture<LtineraireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtineraireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LtineraireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
