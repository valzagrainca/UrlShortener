import { Component, OnInit } from '@angular/core';
import { UrlShortenerService } from 'src/app/services/urlShortener.service';
import { Url } from 'src/app/models/url';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-url-shortener-tabel',
  templateUrl: './url-shortener-tabel.component.html',
  styleUrls: ['./url-shortener-tabel.component.css'],
})
export class UrlShortenerTabelComponent implements OnInit {
  constructor(
    private urlShortenerService: UrlShortenerService,
    private config: ConfigService
  ) {}
  host = this.config.apiUrl;
  urls: Url[] = [];
  ngOnInit(): void {
    this.urlShortenerService.getUrls().subscribe(
      (result) => {
        this.urls = result.urls;
        console.log(this.urls);
      },
      (error: any) => {
        console.error(error);
      }
    );

    this.urlShortenerService.newUrlAdded.subscribe((newUrl) => {
      this.urls.push(newUrl);
    });
  }

  hasExpired(expired_at: any): boolean {
    return new Date(expired_at) < new Date();
  }
}
