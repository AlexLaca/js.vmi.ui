import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondChapterComponent } from './second-chapter.component';

describe('SecondChapterComponent', () => {
  let component: SecondChapterComponent;
  let fixture: ComponentFixture<SecondChapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondChapterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
