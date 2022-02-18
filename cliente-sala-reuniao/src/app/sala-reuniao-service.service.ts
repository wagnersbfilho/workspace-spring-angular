import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalaReuniaoServiceService {

  private baseUrl = 'http://localhost:8082/salareuniao';

  constructor(private http: HttpClient) { }

  getSala(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  inserirSala(sala: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, sala);
  }

  atualizarSala(id: number, sala: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, sala);
  }

  apagarSala(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getListaSalas(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
