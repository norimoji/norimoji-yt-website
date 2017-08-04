import { YouTubeServiceAPI } from './youtubeservice';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as $ from 'jquery';
import { Observable } from 'rxjs/Rx';

declare var setup: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'app';
  isDarkTheme = false;
  results: Observable<any>;

  constructor(private youtubeService: YouTubeServiceAPI) {
    this.results = youtubeService.intialise();
 
}
}


