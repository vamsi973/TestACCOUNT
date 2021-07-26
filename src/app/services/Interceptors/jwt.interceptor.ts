import { Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Observable } from 'rxjs';
import { config } from '../../helper/config';
import { tap } from 'rxjs/operators';



@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        private auth: AuthenticationService,
        private router: Router
    ) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let cloned =req;
        if (localStorage.getItem('token')) {
            cloned = req.clone({
                headers: req.headers.append('token',`jwt ${localStorage.getItem('token')}` )
            })
        }
        return next.handle(cloned).pipe(
            tap(ele => {
                if (ele instanceof HttpResponse) {
                    if (ele.body && ele.body.msg == "Invalid!") {
                        this.auth.logout();
                        localStorage.clear();
                        this.router.navigateByUrl('/login');
                    } else {

                    }
                }
            })
        );
    }
}