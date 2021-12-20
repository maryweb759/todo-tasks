import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  todoForm: FormGroup;
  tasks:any[]= []
  constructor(fb: FormBuilder) {
    this.todoForm = fb.group({
      task: ["", Validators.required]
  });
  }
 ngOnInit(): void {
     
 }  

 addTask() {
  this.tasks.push(this.todoForm.value as string[] ) 
   console.log(this.todoForm.value);
   
 } 
 deleteItem(index: Number) {
  this.tasks.splice(index as number, 1)
   console.log(index);
   
 }
}


