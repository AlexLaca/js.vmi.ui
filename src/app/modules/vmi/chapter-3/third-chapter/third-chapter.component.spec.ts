import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdChapterComponent } from './third-chapter.component';

describe('ThirdChapterComponent', () => {
  let component: ThirdChapterComponent;
  let fixture: ComponentFixture<ThirdChapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdChapterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
