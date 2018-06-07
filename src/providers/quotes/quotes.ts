import { environment } from './../../environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the QuotesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuotesProvider {
  api_url = environment.site_url + environment.quotes_url;

  constructor(public http: HttpClient) {
    console.log('Hello QuotesProvider Provider');
  }

  getQuotes(){
    console.log(this.api_url);
    return this.http.get(this.api_url);

  }

  getQuotesById(quoteid){

    return this.http.get(this.api_url + '/'+ quoteid);

  }

  postQuote(content, author){
    let data = {
      title: content,
      quote: content,
      writer: author,
      status: 'publish'

    };

    console.log(data);

    let token = JSON.parse(localStorage.getItem('wpIonicToken')).token;
    console.log(token);

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(this.api_url, data, {headers: headers});


  }


}
