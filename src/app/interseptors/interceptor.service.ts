import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {CatsService} from "../services/cats.service";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class Interceptor implements HttpInterceptor{
  constructor(private catsService: CatsService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        ['x-api-key']: 'live_KPNQ0ho82luTJhcHbs7dJJGcdCaozrk1MoSWQHwqquT58QzaqkwcIUlJ1NPDAyWv'
      }
    })
    return next.handle(request);
  }
}
