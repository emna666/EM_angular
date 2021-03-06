import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment }  from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getUsers() {
    return this.http.get(`${environment.url}/users`);
  }

  firstClick() {
    return console.log('clicked');
  }
}
