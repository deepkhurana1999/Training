import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SubjectService {

  counter = 0;
  count$ : Observable<any>;
  private subject : Subject<number>;
  constructor() { }

  subjectFunction(){
    this.subject = new Subject<number>();
    this.count$ = this.subject.asObservable();
    setInterval(()=>{
      this.counter = this.counter + 1;
      if(this.counter>20)
        this.subject.complete();
      this.subject.next(this.counter);
    },1000);
  }
}
