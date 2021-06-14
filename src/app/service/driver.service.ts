import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Driver } from '../model/driver';
import { Observable } from 'rxjs';

@Injectable()
export class DriverService {
  private readonly driversUrl: string;

  constructor(private http: HttpClient) {
    this.driversUrl = 'http://localhost:9090/drivers';
  }

  public findAll(): Observable<Driver[]> {
    return this.http.get<Driver[]>(this.driversUrl);
  }

}
