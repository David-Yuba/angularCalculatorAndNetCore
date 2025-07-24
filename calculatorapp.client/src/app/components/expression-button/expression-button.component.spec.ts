import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionButtonComponent } from './expression-button.component';

describe('ExpressionButtonComponent', () => {
  let component: ExpressionButtonComponent;
  let fixture: ComponentFixture<ExpressionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpressionButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpressionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
