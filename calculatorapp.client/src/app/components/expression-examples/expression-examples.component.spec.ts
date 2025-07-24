import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionExamplesComponent } from './expression-examples.component';

describe('ExpressionExamplesComponent', () => {
  let component: ExpressionExamplesComponent;
  let fixture: ComponentFixture<ExpressionExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpressionExamplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpressionExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
