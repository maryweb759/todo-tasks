import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  username: string;
  userjob: string
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  addUser() {
   this.userService.addUser(this.username, this.userjob, 'active')
  }
}
