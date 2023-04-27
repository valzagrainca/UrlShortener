import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Url } from '../models/url';
import { UrlResponseModel } from '../models/url-response-model';

@Injectable({
  providedIn: 'root'
})
export class UrlShortenerService {
  constructor(private http:HttpClient, private config: ConfigService){}

  newUrlAdded = new EventEmitter<Url>();
  errorOccurred = new EventEmitter<boolean>();
  
  posturlShorten(fullURL: any, shortUrlId: any, expirationDate: any){
    const body={
        fullUrl : fullURL,
        shortUrlId: shortUrlId,
        expirationDate: expirationDate
    }
    this.http.post<Url>(this.config.apiUrl,body).subscribe(
        (res)=>{
            this.newUrlAdded.emit(res); 
            this.errorOccurred.emit(false);
        },
        (error)=>{
          if(error.error.message==='Short url error'){
            this.errorOccurred.emit(true);
          }
        }
    );
  }

  getUrls(){
    return this.http.get<UrlResponseModel>(this.config.apiUrl);
  }

}