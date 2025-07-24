import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonSymbolsComponent } from "../common-symbols/common-symbols.component";
import { ExpressionExamplesComponent } from "../expression-examples/expression-examples.component";
import { ExpressionValueService } from '../../services/expression-value.service';
import { ParserApiService } from "../../services/parser-api.service";

@Component({
  selector: 'app-calculator-input',
  standalone: true,
  imports: [CommonSymbolsComponent, ExpressionExamplesComponent, ReactiveFormsModule],
  templateUrl: './calculator-input.component.html',
  styleUrl: './calculator-input.component.css',
  providers: []
})
export class CalculatorInputComponent {
  exp = new FormControl('');
  result: number | null = null;
  constructor (private expression: ExpressionValueService, private parser: ParserApiService ){}

  sendExp() {
    if (this.exp.value != null) this.parser.sendExp(this.exp.value).subscribe({
      next: (res) => { this.result = res; console.log(this.result) },
      error: (err) => console.error(err)
    });
  }
}
