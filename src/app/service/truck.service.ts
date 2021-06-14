import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Truck } from '../model/truck';
import { Observable } from 'rxjs';
import {Order} from "../model/order";

@Injectable()
export class TruckService {
  private readonly trucksUrl: string;

  constructor(private http: HttpClient) {
    this.trucksUrl = 'http://localhost:9090/trucks';
  }

  public findAll(): Observable<Truck[]> {
    return this.http.get<Truck[]>(this.trucksUrl);
  }
}
