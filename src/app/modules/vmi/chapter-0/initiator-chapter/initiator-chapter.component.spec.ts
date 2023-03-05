import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiatorChapterComponent } from './initiator-chapter.component';

describe('InitiatorChapterComponent', () => {
  let component: InitiatorChapterComponent;
  let fixture: ComponentFixture<InitiatorChapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitiatorChapterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitiatorChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
