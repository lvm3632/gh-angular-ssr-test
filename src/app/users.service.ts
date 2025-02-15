import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Reemplaza con tu URL real

  http = inject(HttpClient);

  constructor() { }

  getUsers() {
    return this.http.get<any>(this.apiUrl);
  }

  // Obtener usuario por ID
  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`)
        .pipe(tap(console.log))
        ;
  }
}
