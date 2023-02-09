import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedFamilyListComponent } from './extended-family-list.component';

describe('ExtendedFamilyListComponent', () => {
  let component: ExtendedFamilyListComponent;
  let fixture: ComponentFixture<ExtendedFamilyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendedFamilyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendedFamilyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
