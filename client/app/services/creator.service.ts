import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Creator } from '../shared/models/creator.model';

@Injectable()
export class CreatorService {

  constructor(private http: HttpClient) { }

  getCreators(): Observable<Creator[]> {
    return this.http.get<Creator[]>('/api/creator');
  }

  countCreators(): Observable<number> {
    return this.http.get<number>('/api/creator/count');
  }

  addCreator(creator: Creator): Observable<Creator> {
    return this.http.post<Creator>('/api/creator', creator);
  }

  getCreator(creator: Creator): Observable<Creator> {
    return this.http.get<Creator>(`/api/creator/${creator.id}`);
  }

  editCreator(creator: Creator): Observable<any> {
    return this.http.put(`/api/creator/${creator.id}`, creator, { responseType: 'text' });
  }

  deleteCreator(creator: Creator): Observable<any> {
    return this.http.delete(`/api/creator/${creator.id}`, { responseType: 'text' });
  }

}
