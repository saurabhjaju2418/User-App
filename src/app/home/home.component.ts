import { Component, OnInit } from '@angular/core';
import { home } from '../../apiUrls';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userDatails: any;

  constructor(private http: HttpClient, private router: Router) {

  }

  ngOnInit() {
    this.http.get(home).subscribe(data => {
      this.userDatails = data;
    });
  }

  navigates(id) {
    this.router.navigate(['/details', id]);
  }
}
