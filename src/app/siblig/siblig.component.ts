import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SibligService } from '../service/sibling.service';

@Component({
  selector: 'app-siblig',
  templateUrl: './siblig.component.html',
  styleUrls: ['./siblig.component.css']
})
export class SibligComponent implements OnInit {
  form:any;
 
 
  constructor(private sibligS:SibligService, private router: Router) { 
    this.form = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.maxLength(25)]) ,
      lastname: new FormControl('', [Validators.required, Validators.maxLength(25)]) ,
      email: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl(null, Validators.required),
      cnfpass: new FormControl(null, this.passValidator),
      companyName: new FormControl(null, Validators.required),
      roleDescription: new FormControl(null, [Validators.required]),
      
    });
    this.form.controls.password.valueChanges
    .subscribe(
      x => this.form.controls.cnfpass.updateValueAndValidity()
    );
  }

  ngOnInit(): void {
  }
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

  moveToSecondSib() {
    // we can give it the type we like json , object , string
    this.sibligS.emit<any>(this.form.value);
    this.router.navigate(['/sibling2'])
  }

}
