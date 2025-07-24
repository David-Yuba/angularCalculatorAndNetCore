import { Component } from '@angular/core';
import { CalculatorInputComponent } from "../calculator-input/calculator-input.component";
import { CalculatorOutputComponent } from "../calculator-output/calculator-output.component";
import { ExpressionValueService } from '../../services/expression-value.service';

@Component({
  selector: 'app-calculator',
  imports: [CalculatorInputComponent, CalculatorOutputComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  setExpression(newExpression: string) {
  }
}
