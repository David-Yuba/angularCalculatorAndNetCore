import { Component, ViewChild, ElementRef, Input  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ExpressionValueService } from '../../services/expression-value.service';

@Component({
  selector: 'app-expression-button',
  imports: [],
  templateUrl: './expression-button.component.html',
  styleUrl: './expression-button.component.css'
})
export class ExpressionButtonComponent {
  @ViewChild("addSymbolButton") buttonRef!: ElementRef;
  @Input() controlExp!: FormControl;
  constructor (private expression: ExpressionValueService){}

  handleClick(event : MouseEvent) {
    const target = event.target as HTMLElement;
    this.sendExpression(target.innerHTML);
  }
  sendExpression(html:string){
    this.controlExp.setValue(html);
  }
}
