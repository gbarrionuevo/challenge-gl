import { Routes } from '@angular/router';
import { PostWCommentsComponent } from './postWComments-component/postWComments.component';
import { PostsListComponent } from './posts-list-component/posts-list.component';

export const RouteDefinitions : Routes  = [
  { path: 'posts', component: PostsListComponent },
  { path: 'post/:postId', component: PostWCommentsComponent },
  { path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  }
];