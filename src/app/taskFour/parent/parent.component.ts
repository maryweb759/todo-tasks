import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 
  employees = []
  constructor() { }
 
  ngOnInit(): void {
    
   
      
    }
  
  
   
// parent function 
parentFunction(employe) {
 
  this.employees = employe
  console.warn(employe);
 }
}
