import { Disciplina } from './../models/disciplina';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  private URL: string = 'http://localhost:8080/disciplina';

  constructor(private httpCliente: HttpClient) { }

  buscarDisciplinas(): Observable<Disciplina[]>{
    return this.httpCliente.get<Disciplina[]>(this.URL)
  }

  deletarDisciplinas(): Observable<Disciplina[]>{
    return this.httpCliente.delete<Disciplina[]>(this.URL)
  }

  inserirDisciplinas(Disciplina: Disciplina): Observable<Disciplina[]>{
    return this.httpCliente.post<Disciplina[]>(this.URL,Disciplina)
  }

  atualizarDisciplinas(Disciplina: Disciplina): Observable<Disciplina[]>{
    return this.httpCliente.put<Disciplina[]>(this.URL,Disciplina)
  }
}
