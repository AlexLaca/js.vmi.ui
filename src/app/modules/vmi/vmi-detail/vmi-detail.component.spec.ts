import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmiDetailComponent } from './vmi-detail.component';

describe('VmiDetailComponent', () => {
  let component: VmiDetailComponent;
  let fixture: ComponentFixture<VmiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmiDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VmiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
