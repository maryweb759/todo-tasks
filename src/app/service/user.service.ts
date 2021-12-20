import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    {name: 'mereim', job:'angular developper', status:'active'},
    {name: 'lina', job:'angular developper', status:'active'},

  ]
  constructor() { } 

  addUser(name:string, job:string, status: string) {
    this.users.push({name, job, status})
  }

  updateStatus(id: number, status: string) {
    this.users[id].status = status ;
  }
}
