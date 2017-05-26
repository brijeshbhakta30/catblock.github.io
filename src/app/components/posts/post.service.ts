import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Post } from './post';

@Injectable()
export class PostService {
  // private postsPath = 'https://raw.githubusercontent.com/johnpapa/angular-tour-of-heroes/master';
  private postsPath = 'http://localhost:4040/posts';
  // List of posts file names
  private postsUrl = [
    '1',
    '2'
  ];

  posts: Post[] = [{
    'id': 1,
    'title': 'assassaas Blog',
    'author': {
      'name': 'author',
      'login': 'login',
      'email': 'test@test.com'
    },
    'categories': [],
    'tags': [],
    'comments': [],
    'date': '20-05-2017',
    'isPublished': true
  }, {
    'id': 2,
    'title': 'ppppppp Blog',
    'author': {
      'name': 'author',
      'login': 'login',
      'email': 'test@test.com'
    },
    'categories': [],
    'tags': [],
    'comments': [],
    'date': '20-05-2017',
    'isPublished': true
  }, {
    'id': 3,
    'title': 'ppppppp Blog',
    'author': {
      'name': 'author',
      'login': 'login',
      'email': 'test@test.com'
    },
    'categories': [],
    'tags': [],
    'comments': [],
    'date': '20-05-2017',
    'isPublished': false
  }];

  constructor(private http: Http) { }

  getPosts(): Promise<Array<Post>> {
    /*const promises = this.postsUrl.map((file) => {
      return this.http.get(`${this.postsPath}/${file}`).toPromise().then((response) => response.json());
    });
    return Promise.all(promises)
      .then(response => response as Post[])
      .catch(this.handleError);*/

    return Promise.resolve(this.posts.filter(post => post.isPublished));
  }

  getPost(id: number): Promise<Post> {
    return this.getPosts()
      .then(posts => posts.find(post => post.id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
