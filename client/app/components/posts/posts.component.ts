import { Component, OnInit } from '@angular/core';

import { PostService } from '../../services/post.service';
import { ToastComponent } from '../../shared/toast/toast.component';
import { Post } from '../../shared/models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  post = new Post();
  posts: Post[] = [];
  isLoading = true;
  isEditing = false;

  constructor(private postService: PostService,
              public toast: ToastComponent) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts().subscribe({
      next: data => this.posts = data,
      error: error => console.log(error),
      complete: () => this.isLoading = false
    });
  }

  enableEditing(post: Post): void {
    this.isEditing = true;
    this.post = post;
  }

  cancelEditing(): void {
    this.isEditing = false;
    this.post = new Post();
    this.toast.setMessage('Item editing cancelled.', 'warning');
    this.getPosts();
  }

  editPost(post: Post): void {
    this.postService.editPost(post).subscribe({
      next: () => {
        this.isEditing = false;
        this.post = post;
        this.toast.setMessage('Item edited successfully.', 'success');
      },
      error: error => console.log(error)
    });
  }

  deletePost(post: Post): void {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.postService.deletePost(post).subscribe({
        next: () => {
          this.posts = this.posts.filter(elem => elem.id !== post.id);
          this.toast.setMessage('Item deleted successfully.', 'success');
        },
        error: error => console.log(error)
      });
    }
  }

}
