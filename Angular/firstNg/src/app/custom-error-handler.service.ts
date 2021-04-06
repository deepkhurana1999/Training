import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomErrorHandlerService implements ErrorHandler {

  constructor() { }
  handleError(error: any): void {
   console.log("The error will be logged later using API.");
   throw error;
  }
}
