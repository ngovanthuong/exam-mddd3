import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Awesome} from './Awesome';

@Injectable({
  providedIn: 'root'
})
export class AwesomeService {

  API_URL = 'http://localhost:3000/awesomes';

  constructor(private httpClient: HttpClient) {
  }

  getAllAwesome(): Observable<Awesome[]> {
    return this.httpClient.get<Awesome[]>(this.API_URL);
  }
  addAwesome(awesome: Awesome): Observable<Awesome> {
    return this.httpClient.post<Awesome>(this.API_URL, awesome);
  }
  deleteAwesome(id: number): Observable<Awesome> {
    return this.httpClient.delete<Awesome>(`${this.API_URL}/${id}`);
  }
  updateAwesome(awesome: Awesome): Observable<Awesome> {
    return this.httpClient.put<Awesome>(`${this.API_URL}/${awesome.id}`, awesome);
  }
  getAwesome(id: number): Observable<Awesome> {
    return this.httpClient.get<Awesome>(`${this.API_URL}/${id}`);

  }
}
