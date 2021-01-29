import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Client } from './client-data';
import { ClientFetch } from './client-fetch';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiurl = 'api/clients';                 // Our created Data can be accessed here at api/users
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient) { }                     //Injecting HTTP service to communicate with the data

  private handleError(error: any) {                                  //Created a function to handle and log errors, in case
    return throwError(error);
  }
  
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiurl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  getClient(id: number): Observable<ClientFetch> {
    const url = `${this.apiurl}/${id}`;
    return this.http.get<ClientFetch>(url).pipe(
    catchError(this.handleError)
    );
    }

    addUser (client: ClientFetch): Observable<ClientFetch> {
      client.id=null;
      return this.http.post<ClientFetch>(this.apiurl, client, this.httpOptions).pipe(
        tap(data => console.log(data)),
        catchError(this.handleError)
      );
  }

  deleteUser(id: number): Observable<ClientFetch> {
    const url = `${this.apiurl}/${id}`;
    return this.http.delete<ClientFetch>(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updateUser(client: ClientFetch): Observable<ClientFetch>{
    return this.http.put<ClientFetch>(this.apiurl, client, this.httpOptions).pipe(
      map(() => client),
      catchError(this.handleError)
    );
  }
}
