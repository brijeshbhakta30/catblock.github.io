import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  selectedPost: Post;
  error: any;
  showNgFor = false;

  constructor(private router: Router,
              private postService: PostService) {
  }

  getPosts(): void {
    this.postService
      .getPosts()
      .then(posts => this.posts = posts)
      .catch(error => this.error = error);
  }

  ngOnInit(): void {
    this.getPosts();
  }

  gotoDetail(post: Post): void {
    this.router.navigate([`/blog-posts/${post.id}`]);
  }
}
