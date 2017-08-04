import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

const FUNCTION_URL = 'https://www.googleapis.com/youtube/v3/playlistItems';
const API_TOKEN = 'AIzaSyDRey5YC2tvPZQ7ikD9F8Q5qHJYO65_PVM';

@Injectable()
export class YouTubeServiceAPI{
    constructor(private http:Http){
    }

    intialise(){
     return this.http.get(FUNCTION_URL + '?part=snippet&maxResults=10&playlistId=UUuYp_6i2jGf6ZvWo-Ql4wZA&key=' + API_TOKEN)
      .map((res:Response) => res.json())
      .map(json => json.items);
    }
}
