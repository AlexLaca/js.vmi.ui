import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonSearcherComponent } from './person-searcher.component';

describe('PersonSearcherComponent', () => {
  let component: PersonSearcherComponent;
  let fixture: ComponentFixture<PersonSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonSearcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
