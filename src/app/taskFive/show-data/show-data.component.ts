import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {

  data: any;
  constructor(
    private router:Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() { 
    this.activateRoute.queryParamMap.subscribe((params) => {
      console.log(params.get('data'));
      let datas = params.get('data');
      this.data = JSON.parse(datas)
    })
  }
}
