import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Place } from './Place';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  private baseUrl: string = 'http://localhost:3000/places';

  constructor(private http: HttpClient) {}

  save(place: Place): Observable<Place> {
    return this.http.post<Place>(this.baseUrl, place);
  }

  findAll(): Observable<Place[]> {
    return this.http.get<Place[]>(this.baseUrl);
  }

  filter(name: string, category: string) : Observable<Place[]> {
    
    let parameters = new HttpParams();

    if(name) {
      parameters = parameters.set('name_like', name);
    }

    if(category) {
      parameters = parameters.set('category', category);
    }

    return this.http.get<Place[]>(this.baseUrl, {
      params: parameters
    })
  }
}
