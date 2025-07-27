import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpressionValueService {
  private expression = new BehaviorSubject<number>(0);
  expression$ = this.expression.asObservable();
  setResult(result: number) {
    this.expression.next(result);
  }
}
