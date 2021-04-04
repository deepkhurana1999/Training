import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Logv1Service {

  private static count = 0;
  constructor() { 
    Logv1Service.count++;
    console.log("Number of times log --version: 1 object created: "+ Logv1Service.count); 
  }

  logData(data: string){
    return "Logging data using log v1 service: " + data;
  }
}
