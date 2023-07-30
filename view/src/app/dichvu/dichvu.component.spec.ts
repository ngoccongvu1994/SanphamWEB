import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DichVuComponent } from './dichvu.component';

describe('DichVuComponent', () => {
  let component: DichVuComponent;
  let fixture: ComponentFixture<DichVuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DichVuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DichVuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
