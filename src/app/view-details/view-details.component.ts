import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  
  @Input() employes: any[]= [] ;
  
  constructor() {
    
   }

  ngOnInit(): void {
    
  this.employes.forEach(element => {
      element.showAll = false;
      console.log(element);
      
    });
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