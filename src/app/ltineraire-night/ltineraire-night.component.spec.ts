import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtineraireNightComponent } from './ltineraire-night.component';

describe('LtineraireNightComponent', () => {
  let component: LtineraireNightComponent;
  let fixture: ComponentFixture<LtineraireNightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtineraireNightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LtineraireNightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
