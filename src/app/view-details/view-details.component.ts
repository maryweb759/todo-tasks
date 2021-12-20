import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  
  @Input() employes: Array<any> ;
  Readmore:boolean = true; 
  visible:boolean = false;
  constructor() { }

  toggleText(employee, index) {
    console.log(index, employee); 
    
    /*
    this.employes.map(emp => {
      let displayMore = index.email === emp.email;
      if(displayMore) {
        this.Readmore = !this.Readmore;
        this.visible = !this.visible;
      } else {
        return
      }
    })
      
   */
    
  }

  ngOnInit(): void {
   
  }

}