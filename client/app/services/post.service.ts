import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from '../shared/models/post.model';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('/api/post');
  }

  countPosts(): Observable<number> {
    return this.http.get<number>('/api/post/count');
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>('/api/post', post);
  }

  getPost(post: Post): Observable<Post> {
    return this.http.get<Post>(`/api/post/${post.id}`);
  }

  editPost(post: Post): Observable<any> {
    return this.http.put(`/api/post/${post.id}`, post, { responseType: 'text' });
  }

  deletePost(post: Post): Observable<any> {
    return this.http.delete(`/api/post/${post.id}`, { responseType: 'text' });
  }

}
