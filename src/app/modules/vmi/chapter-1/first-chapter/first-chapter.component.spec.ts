import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstChapterComponent } from './first-chapter.component';

describe('FirstChapterComponent', () => {
  let component: FirstChapterComponent;
  let fixture: ComponentFixture<FirstChapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstChapterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
