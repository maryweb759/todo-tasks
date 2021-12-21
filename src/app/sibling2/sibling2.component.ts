import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SibligService } from '../service/sibling.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {
  public data:any = [];
  constructor(private sibligS:SibligService) { }

  
  ngOnInit(): void {
    this.sibligS.on<any>().subscribe(
      data => {
        this.data = data ;
        console.log(data);
        
      }
    ) 
    
  
  }

  toggleMore(employe:any) {  
    employe.showAll = true;
    console.log(employe);
   }
     
   toggLeless(employe:any) {  
     employe.showAll = false ; 
     console.log(employe);
     
    }
}
