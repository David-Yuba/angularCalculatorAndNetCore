import { Component, Input } from '@angular/core';
import { ExpressionValueService} from '../../services/expression-value.service';

@Component({
  selector: 'app-calculator-output',
  imports: [],
  templateUrl: './calculator-output.component.html',
  styleUrl: './calculator-output.component.css',
  providers: []
})
export class CalculatorOutputComponent {
  constructor(private expression: ExpressionValueService) {}

  exp: string | undefined = undefined;
  res: number | null = null;
  ngOnInit() {
    this.expression.expression$.subscribe(e => {
      
    });
  }

}
