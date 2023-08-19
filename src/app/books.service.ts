import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private _HttpClient:HttpClient) {

   }

  getTrending():Observable<any>
  {
      return this._HttpClient.get('https://bd36-45-245-240-144.ngrok.io/api/v1/books')
  }

 
}
