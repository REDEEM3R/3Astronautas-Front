import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface MyData {
  obj: Array<Object>;
}

@Injectable()
export class PlanetasService {

  API_URL  =  'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getPlanetas(): any {
    return  this.http.get<MyData>('/api/planetas');
  }


}

