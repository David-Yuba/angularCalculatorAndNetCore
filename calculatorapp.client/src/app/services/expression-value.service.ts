import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpressionValueService {
  private expression = new BehaviorSubject<string>("");
  expression$ = this.expression.asObservable();
  res: number | null = null;
  setExpression(newExpression: string) {
    this.expression.next(newExpression)
  }
}
