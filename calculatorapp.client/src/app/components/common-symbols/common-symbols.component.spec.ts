import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSymbolsComponent } from './common-symbols.component';

describe('CommonSymbolsComponent', () => {
  let component: CommonSymbolsComponent;
  let fixture: ComponentFixture<CommonSymbolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonSymbolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonSymbolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
