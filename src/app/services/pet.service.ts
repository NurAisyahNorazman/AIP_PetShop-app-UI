import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet';

const httpOptions = {
  headers: new HttpHeaders({'content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private baseUrl = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }

  getAllPets(): Observable<Pet[]>{
    return this.http.get<Pet[]>(`${this.baseUrl}/pets`);
  }

  getPetsByOwnerId(ownerId:number): Observable<Pet[]>{
    return this.http.get<Pet[]>(`${this.baseUrl}/owners/${ownerId}/pets`);
  }
 
  addPets(ownerId: number, pet: Pet): Observable<Pet[]>{
    return this.http.post<Pet[]>(`${this.baseUrl}/owners/${ownerId}/pets`, pet, httpOptions);
  }

  getPetById(ownerId: number, petId: number): Observable<Pet> {
    return this.http.get<Pet>(`${this.baseUrl}/owners/${ownerId}/pets/${petId}`);
  }

  editPets(ownerId:number, petId:number, updatedPet:Pet): Observable<Pet>{
    let body = JSON.stringify(updatedPet);
    return this.http.put<Pet>(`${this.baseUrl}/owners/${ownerId}/pets/${petId}`, body, httpOptions);
  }

  deletePets(ownerId: number, petId: number): Observable<Pet> {
    return this.http.delete<Pet>(`${this.baseUrl}/owners/${ownerId}/pets/${petId}`)
  }
  
}

