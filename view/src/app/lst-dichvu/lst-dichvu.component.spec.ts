import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LstDichVuComponent } from './lst-dichvu.component';

describe('LstProductComponent', () => {
  let component: LstDichVuComponent;
  let fixture: ComponentFixture<LstDichVuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LstDichVuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LstDichVuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
