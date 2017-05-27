import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PostDetailComponent } from './components/posts/post-detail/post-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'blog-posts',
    children: [
      { path: '', component: PostsComponent },
      { path: ':id', component: PostDetailComponent },
    ] },
  { path: 'privacy', component: PrivacyComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
