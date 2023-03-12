import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthChapterComponent } from './fourth-chapter.component';

describe('FourthChapterComponent', () => {
  let component: FourthChapterComponent;
  let fixture: ComponentFixture<FourthChapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthChapterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
