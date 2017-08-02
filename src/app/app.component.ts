import { Component, OnInit, enableProdMode } from '@angular/core';
import { Http } from '@angular/http';
import * as $ from 'jquery';

declare var setup: any;

const FUNCTION_URL = ' https://www.googleapis.com/youtube/v3/playlistItems';
const API_TOKEN = 'AIzaSyDRey5YC2tvPZQ7ikD9F8Q5qHJYO65_PVM';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  isDarkTheme = false;
  path = '../assets/youtubescript.js';
  myData: Array<any>;

  constructor(private _http: Http) {
    this._http.get('`${FUNCTION_URL}?part=snippet&maxResults=10&playlistId=UUuYp_6i2jGf6ZvWo-Ql4wZA&key=${API_TOKEN}')
        .map(response => response.json())
        .subscribe(res => this.myData = res);
}
       ngOnInit():any{  
        $(document).ready(function(){

        })
    }
}

