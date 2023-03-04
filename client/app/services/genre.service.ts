import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Genre } from '../shared/models/genre.model';

@Injectable()
export class GenreService {

  constructor(private http: HttpClient) { }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>('/api/genre');
  }

  countGenres(): Observable<number> {
    return this.http.get<number>('/api/genre/count');
  }

  addGenre(genre: Genre): Observable<Genre> {
    return this.http.post<Genre>('/api/genre', genre);
  }

  getGenre(genre: Genre): Observable<Genre> {
    return this.http.get<Genre>(`/api/genre/${genre.id}`);
  }

  editGenre(genre: Genre): Observable<any> {
    return this.http.put(`/api/genre/${genre.id}`, genre, { responseType: 'text' });
  }

  deleteGenre(genre: Genre): Observable<any> {
    return this.http.delete(`/api/genre/${genre.id}`, { responseType: 'text' });
  }

}
