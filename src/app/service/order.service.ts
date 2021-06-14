import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../model/order';
import { Observable } from 'rxjs';

@Injectable()
export class OrderService {
  private readonly ordersUrl: string;

  constructor(private http: HttpClient) {
    this.ordersUrl = 'http://localhost:9090/orders';
  }

  public findAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl);
  }
}
