import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log('intercepted request ... ');

        // Cloning the request to add the new header.
        const authReq = req.clone(
            {
                headers: req.headers.set('Access-Control-Allow-Origin', 'https://awoiaf.westeros.org')
            }
        );

        console.log('Sending request with new header now ...');

        // send the newly created request
        return next.handle(authReq)
            .catch((error, caught) => {
                // intercept the respons error and displace it to the console
                console.log('Error Occurred');
                console.log(error);
                // return the error to the method that called it
                return Observable.throw(error);
            }) as any;
    }
}
