import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PersonModel } from './models/peson.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://go4.dev/person';

  constructor(private http: HttpClient) {}

  postRequest(person: PersonModel): Observable<string> {
    return this.http.post(`${this.apiUrl}/add`, JSON.stringify(person), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      responseType: 'text',
    });
  }

  getRequest(): Observable<PersonModel[]> {
    return this.http.get(`${this.apiUrl}/get`).pipe(
      map((data: any): PersonModel[] => {
        let persons: PersonModel[] = [];
        data.people.forEach((person: any) => {
          persons.push(
            new PersonModel(
              person.id,
              person.firstName,
              person.lastName,
              person.email
            )
          );
        });

        return persons;
      })
    );
  }

  deleteRequest(id: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`, {
      responseType: 'text',
    });
  }
}
