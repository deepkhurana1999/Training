import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class LogService {

  private static count = 0;
  constructor() { 
    LogService.count++;
    console.log("Number of times log service object created: "+ LogService.count); 
  }

  logData(data: string){
    return "Logging data using log service:  " + data;
  }
}