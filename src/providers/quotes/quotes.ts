import { environment } from './../../environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the QuotesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuotesProvider {
  api_url = environment.site_url+environment.quotes_url;

  constructor(public http: HttpClient) {
    console.log('Hello QuotesProvider Provider');
  }

  getQuotes(){
    return this.http.get(this.api_url);
  }

}
