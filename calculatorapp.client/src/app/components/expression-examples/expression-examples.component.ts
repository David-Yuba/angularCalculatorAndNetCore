import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ExpressionButtonComponent } from '../expression-button/expression-button.component';

@Component({
  selector: 'app-expression-examples',
  imports: [ExpressionButtonComponent],
  templateUrl: './expression-examples.component.html',
  styleUrl: './expression-examples.component.css'
})
export class ExpressionExamplesComponent {
  @Input() controlExp!: FormControl;
}
