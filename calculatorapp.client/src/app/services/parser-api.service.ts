import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ParserApiService {
  private apiUrl = "https://localhost:7184/api/Parse";
  constructor(private http: HttpClient) { }

  sendExp(exp: string) {
    return this.http.post<number>(this.apiUrl, { value: exp });
  }
}
