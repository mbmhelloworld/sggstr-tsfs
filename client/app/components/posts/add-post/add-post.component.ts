import { Component, Input } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators, UntypedFormBuilder } from '@angular/forms';
import { PostService } from '../../../services/post.service';
import { ToastComponent } from '../../../shared/toast/toast.component';
import { Post } from '../../../shared/models/post.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})

export class AddPostComponent {
  @Input() posts: Post[] = [];

  addPostForm: UntypedFormGroup;
  title = new UntypedFormControl('', Validators.required);
  text = new UntypedFormControl('', Validators.required);
  upVote = new UntypedFormControl('', Validators.required);
  downVote = new UntypedFormControl('', Validators.required);
  object = new UntypedFormControl('', Validators.required);
  user = new UntypedFormControl('', Validators.required);

  constructor(private postService: PostService,
              private formBuilder: UntypedFormBuilder,
              public toast: ToastComponent) {
    this.addPostForm = this.formBuilder.group({
      title: this.title,
      text: this.text,
      upVote: this.upVote,
      downVote: this.downVote,
      object: this.object,
      user: this.user,
    });
  }

  addPost(): void {
    this.postService.addPost(this.addPostForm.value).subscribe({
      next: res => {
        this.posts.push(res);
        this.addPostForm.reset();
        this.toast.setMessage('Item added successfully.', 'success');
      },
      error: error => console.log(error)
    });
  }

}
