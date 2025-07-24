import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-symbol-button',
  imports: [],
  templateUrl: './symbol-button.component.html',
  styleUrl: './symbol-button.component.css'
})
export class SymbolButtonComponent {
  @ViewChild("addSymbolButton") buttonRef!: ElementRef;
  @Input() controlExp!: FormControl;

  handleClick(event : MouseEvent) {
    const target = event.target as HTMLElement;
    this.sendExpression(target.innerHTML);
  }
  sendExpression(html : string){
    this.controlExp.setValue(html);
  }
}
