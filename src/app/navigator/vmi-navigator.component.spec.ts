import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmiNavigatorComponent } from './vmi-navigator.component';

describe('VmiNavigatorComponent', () => {
  let component: VmiNavigatorComponent;
  let fixture: ComponentFixture<VmiNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmiNavigatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VmiNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
