import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SibligService {
 public _subject =  new BehaviorSubject<any>('')

 // notifing there is an event
 emit<T>(data:T) {
  this._subject.next(data) ;
 } 
// this on method passing data from one component to another componen
//it return subject 
 on<T>() : Observable<T>{
   return this._subject.asObservable()
 }
}