import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-share-data',
  templateUrl: './share-data.component.html',
  styleUrls: ['./share-data.component.css']
})
export class ShareDataComponent implements OnInit {
  form:any
  constructor(
    private router:Router,
    private activateRoute: ActivatedRoute
  ) {
    this.form = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.maxLength(25)]) ,
      lastname: new FormControl('', [Validators.required, Validators.maxLength(25)]) ,
      email: new FormControl('',[Validators.required]),
      password: new FormControl(null, Validators.required),
      cnfpass: new FormControl(null, Validators.required),
      companyName: new FormControl(null, Validators.required),
      roleDescription: new FormControl(null, [Validators.required]),
      

    })
  }  

  ngOnInit(): void {
  }
  onSubmit() {
    let data:any = this.form.value
    this.router.navigate(['./showdata'], {
      queryParams:{data:JSON.stringify(data)}
    })
  }
}
