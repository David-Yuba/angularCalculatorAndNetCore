import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SymbolButtonComponent } from "../symbol-button/symbol-button.component";

@Component({
  selector: 'app-common-symbols',
  imports: [SymbolButtonComponent],
  templateUrl: './common-symbols.component.html',
  styleUrl: './common-symbols.component.css'
})
export class CommonSymbolsComponent {
  @Input() controlExp!: FormControl;
}
