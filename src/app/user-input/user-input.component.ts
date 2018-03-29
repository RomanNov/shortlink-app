import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {


  fullLink : string = '';
  showResult: boolean = false;
  link: string;
  fullShortLink: string;
  hits: number;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  createShortLink(){
    this.http.post('/api/links',{full_link: this.fullLink}).subscribe(data => { 
      this.link = data['url']; 
      this.hits = data['hits'];
      this.fullShortLink=window.location.hostname + '/' + data['url'];
    });
    this.fullLink = '';
  }

}
