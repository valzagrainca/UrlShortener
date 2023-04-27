import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UrlShortenerService } from 'src/app/services/urlShortener.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-url-shortener-form',
  templateUrl: './url-shortener-form.component.html',
  styleUrls: ['./url-shortener-form.component.css']
})
export class UrlShortenerFormComponent implements OnInit{
  submitted:boolean=false;
  aliasError=false;
  constructor(private urlShortenerService: UrlShortenerService, private config:ConfigService){}
  ngOnInit(): void {
    this.urlShortenerService.errorOccurred.subscribe(
      (res)=>{
        if(res){
          this.aliasError=true;
        }
        else{
          this.aliasError=false;
        }
      }
    )
  }
  
  urlForm= new FormGroup(
    { fullURL: new FormControl(null,Validators.required),
      hostName: new FormControl(this.config.apiUrl),
      alias: new FormControl(null),
      expirationDate: new FormControl(null)
    },
  );

  shortUrlButtonClicked(): void{
    this.submitted=true;
    if(this.urlForm.valid){
      this.urlShortenerService.posturlShorten(this.urlForm.value.fullURL,this.urlForm.value.alias,this.urlForm.value.expirationDate);
    }
  }

  minExpiryDateTime() {
    return new Date().toISOString().slice(0, 16);
  }
  
  maxExpiryDateTime() {
    const maxDate = new Date('2070-12-31T23:59');
    return maxDate.toISOString().slice(0, 16);
  }
  
}
