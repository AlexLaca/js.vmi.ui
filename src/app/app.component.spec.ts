import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { VmiComponent } from './vmi.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        VmiComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(VmiComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'vmi'`, () => {
    const fixture = TestBed.createComponent(VmiComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('vmi');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(VmiComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('vmi app is running!');
  });
});
