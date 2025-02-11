import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmgastosComponent } from './frmgastos.component';

describe('FrmgastosComponent', () => {
  let component: FrmgastosComponent;
  let fixture: ComponentFixture<FrmgastosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrmgastosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrmgastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
