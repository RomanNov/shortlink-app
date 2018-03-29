import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-links',
  templateUrl: './list-links.component.html',
  styleUrls: ['./list-links.component.css']
})
export class ListLinksComponent implements OnInit {

  links:any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/links').subscribe(data => { 
      this.links = data; 
    });
  }

}
