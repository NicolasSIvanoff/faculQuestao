import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Pessoa } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Pessoa
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Pessoa);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'hcode'`, () => {
    const fixture = TestBed.createComponent(Pessoa);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('hcode');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(Pessoa);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('hcode app is running!');
  });
});
