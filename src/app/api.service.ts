import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  logar(arg0: { email: string; password: string; }) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
