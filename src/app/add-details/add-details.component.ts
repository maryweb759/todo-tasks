import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {

  form: FormGroup; 
  // child variable 
  employee= [] 
  // date variable
  maxDate:any = ''; 

  constructor(){
    this.form  = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.maxLength(25)]) ,
      lastname: new FormControl('', [Validators.required, Validators.maxLength(25)]) ,
      email: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl(null, Validators.required),
      cnfpass: new FormControl(null, this.passValidator),
      companyName: new FormControl(null, Validators.required),
      roleDescription: new FormControl(null, [Validators.required]),
      joiningDate: new FormControl(null, Validators.required),
      
     
    });


    this.form.controls.password.valueChanges
      .subscribe(
        x => this.form.controls.cnfpass.updateValueAndValidity()
      );
  }
  ngOnInit() {
    this.disableFuterDate()
  }
// disable previews date method 
disableFuterDate() {
  var date = new Date();
  var todayDate:any = date.getDate();
  var monthDate:any = date.getMonth() + 1 ;
  var yearDate:any = date.getFullYear(); 
  if (todayDate < 10) {
    todayDate = '0' + todayDate
  }
  if (monthDate < 10) {
    monthDate = '0' + monthDate
  } 
  this.maxDate = yearDate + '-' + monthDate + '-' + todayDate;
  console.log(this.maxDate);
  
}
 // validator method 
  passValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
      const cnfpassValue = control.value;

      const passControl = control.root.get('password');
      if (passControl) {
        const passValue = passControl.value;
        if (passValue !== cnfpassValue || passValue === '') {
          return {
            isError: true
          };
        }
      }
    }

    return null;
  }


  isValid(controlName) {
    return this.form.get(controlName).hasError('required') && this.form.get(controlName).touched;
  }
  isMateched(controlName) {
    return this.form.get(controlName).invalid && this.form.get(controlName).touched;
  }

  onSubmit(){
    this.employee.push(this.form.value  ) 

     console.log(this.form.value);
    // this.form.reset()
   // this.form.markAsTouched();
  }

  onReset() {
    this.form.reset();
  }
 

}
