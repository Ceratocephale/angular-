import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {

  observer! : Subscription;
  ngOnDestroy(): void {

  this.observer.unsubscribe()
    
  }
  ngOnInit(): void {
    this.observer = this.monSubject.subscribe({
      next : (data) => {
        console.log(data);
      },
      error(err){
        console.error(err);
      },
      complete(){
        console.log('completerioooooooooooo')
      }

    })
  }


  valueInput : string = '';

  monSubject : BehaviorSubject<string> = new BehaviorSubject<string>("Hello world")

  sendData(){

    if(this.valueInput == ''){
      this.monSubject.error('CPT')
    }
    else if(this.valueInput == 'stop'){
      this.monSubject.complete()
    }
    else  {
    this.monSubject.next(this.valueInput)
    }


    }
  }



