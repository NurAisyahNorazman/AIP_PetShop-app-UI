import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Owner } from '../models/owner';

const httpOptions = {
  headers: new HttpHeaders({'content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class OwnerService {

  private baseUrl = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }

  getOwners(): Observable<Owner[]>{
    return this.http.get<Owner[]>(`${this.baseUrl}/owners`);
  }

  getOwnersId(id:number): Observable<Owner[]>{
    return this.http.get<Owner[]>(`${this.baseUrl}/owners/`+ id);
  }

  addOwners(owner: Owner): Observable<Owner[]>{
    let body = JSON.stringify(owner);
    return this.http.post<Owner[]>(`${this.baseUrl}/owners`, body, httpOptions);
  }

  deleteOwners(ownerId: number): Observable<Owner> {
    return this.http.delete<Owner>(`${this.baseUrl}/owners/` + ownerId);
  }

}
