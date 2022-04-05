import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orderline } from './orderline.class';

@Injectable({
  providedIn: 'root'
})
export class OrderlineService {

  baseUrl: string = "http://localhost:9107/api/orderlines";

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Orderline[]> {
    return this.http.get(`${this.baseUrl}`) as Observable<Orderline[]>;
  }

  get(id: number): Observable<Orderline> {
    return this.http.get(`${this.baseUrl}/${id}`) as Observable<Orderline>;
  }

  create(orderline: Orderline): Observable<Orderline> {
    return this.http.post(`${this.baseUrl}`, orderline) as Observable<Orderline>;
  }

  change(orderline: Orderline): Observable<any> {
    return this.http.put(`${this.baseUrl}/${orderline.id}`, orderline) as Observable<any>;
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`) as Observable<any>;
  }
}
