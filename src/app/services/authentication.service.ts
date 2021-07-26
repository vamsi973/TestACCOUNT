import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { config } from '../helper/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<userLoginData>;
  public user: Observable<userLoginData>;
  loginR
  constructor(
    public http: HttpClient,
    public route: Router
  ) {
    this.userSubject = new BehaviorSubject<userLoginData>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable()
  }
  currentUserValue;

  login(credentials): Observable<any> {

    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return this.http.post(config.appURL + '/user/userLogin', credentials).pipe(map((res: userLoginData) => {
      if (res.success) {
        this.setLocalStorage(res);
        this.userSubject.next(res);
        return res;
      }
    }))
  }

  register(data): Observable<any> {

    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return this.http.post(config.appURL + '/user/userRegister', data);
  }

  setLocalStorage(response) {
    if (!response.success) {
      return
    }
    localStorage.setItem('token', response.token);
    localStorage.setItem('name', response.data[0]['name']);
    localStorage.setItem('email', response.data[0]['email']);
    localStorage.setItem('phone', response.data['0']['phone']);
    localStorage.setItem('designation', response.data['0']['designation']);
    localStorage.setItem('user', JSON.stringify(response.data['0']))
  }
  public get userValue(): userLoginData {
    return this.userSubject.value;
  }

  logout() {
    //localStorage.removeItem('user');
    localStorage.clear();
    this.userSubject.next(null);
    this.route.navigate(['/login']);
  }
}



export interface userLoginData {
  success: boolean,
  data: any[],
  token: any
}