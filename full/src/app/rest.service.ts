import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

// const endpoint = 'http://192.168.2.102:4000/';
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json'
//   })
// };

export class RestService {

  //   endpoint = 'http://192.168.2.102:4000/';
  // const httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json'
  //   })
  // };
  
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  
}
