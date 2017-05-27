import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: Post;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private postService: PostService) { }

  ngOnInit(): void {
    this.route.params.subscribe((post: Post) => this.post = this.postService.getPost(post.id));
    // this.route.params.subscribe((post: Post) => {
    //   this.postService
    //     .getPost(post.id)
    //     .then(selectedPost => this.post = selectedPost);
    // });
  }
}
