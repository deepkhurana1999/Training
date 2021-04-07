import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
  styleUrls: ['./rx-js.component.css']
})
export class RxJsComponent implements OnInit {

  observer1$ : Subscription;
  observer1: number[] = [];
  observer2$ : Subscription;
  observer2: number[] = [];
  observer3$ : Subscription;
  observer3: number[] = [];
  showObserver1 = false;
  showObserver2 = false;
  showObserver3 = false;
  subjectType = 0;
  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    
  }

  start()
  {
    this.startService();
  }
  startService():void{
    switch(this.subjectType)
    {
      case 0: this.createSubject();
    }
  }

  createSubject(){
    this.subjectService.subjectFunction();
  }

  Subscriber1(){
    this.subjectService.count$.subscribe(
      (data:number)=>{ this.observer1.push(data) },
      null,
      ()=>{ 
        console.log("Completed") 
        this.showObserver1 = true;
      }
    );
  }
  Subscriber2(){
    this.subjectService.count$.subscribe(
      (data:number)=>{ this.observer2.push(data) },
      null,
      ()=>{ 
        console.log("Completed") 
        this.showObserver2 = true;
      }
    );
  }
  Subscriber3(){
    this.subjectService.count$.subscribe(
      (data:number)=>{ this.observer3.push(data) },
      null,
      ()=>{ 
        console.log("Completed") 
        this.showObserver3 = true;
      }
    );
  }

}
