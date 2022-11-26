import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, from, mergeMap, Observable} from "rxjs";
import {Cat} from "../interfaces/cat";

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  url: string = 'https://api.thecatapi.com/v1/images/search?limit=100&has_breeds=1';

  constructor(private http: HttpClient) { }

  getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.url);
  }
}
