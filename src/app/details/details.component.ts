import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { home } from '../../apiUrls';
import { HttpClient } from '@angular/common/http';
import _ from 'lodash';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  user: any;
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
    this.user = {};
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.http.get(home).subscribe(data => {
        this.user = _.find(data, function (u: any) { return u.id == params.id; });
      });
    });
  }

  save(){
    console.log(this.user);
    
  }

}
