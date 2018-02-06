import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Types } from './Types';


@Injectable()
export class GetTypesService {
  private url="http://localhost:18080/Types";
  constructor(
    private http: HttpClient
  ) { }

  getTypes():Observable<Types[]>{
    return this.http.get<Types[]>(this.url);
  }
}
