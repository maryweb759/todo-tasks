import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  users:{name:string, job:string, status:string}[]=[]

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.users = this.service.users
  }

}
