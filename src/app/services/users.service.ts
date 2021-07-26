import { config } from '../helper/config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {

  }

  getUsers(data): Observable<any> {
    return this.http.post(`${config.appURL}/user/usersList`, data)
  }


 

  deleteUser(data): Observable<any> {
    return this.http.post(`${config.appURL}/user/deleteUser`, data)
  }

}
