import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlShortenerTabelComponent } from './url-shortener-tabel.component';

describe('UrlShortenerTabelComponent', () => {
  let component: UrlShortenerTabelComponent;
  let fixture: ComponentFixture<UrlShortenerTabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlShortenerTabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlShortenerTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
