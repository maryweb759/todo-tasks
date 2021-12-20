import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.css']
})
export class DrivenFormComponent implements OnInit {

  list:any[] = [] 

  constructor() { 
   
  }

  ngOnInit(): void {
  }
 
  addTask(item: any) {
    console.log(this.list);
    this.list.push({id:this.list.length, name:item})
   } 
   deleteItem(id:number) {
     this.list = this.list.filter(item => item.id !== id)
   } 

}
