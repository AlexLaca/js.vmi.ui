import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmiListComponent } from './vmi-list.component';

describe('VmiListComponent', () => {
  let component: VmiListComponent;
  let fixture: ComponentFixture<VmiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmiListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VmiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
