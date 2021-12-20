import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user:{name:string, job:string, status:string};
 @Input() id: number;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
   
  }
  onUpdateStatus(status: string) {
    this.userService.updateStatus(this.id, status)
  }
}
