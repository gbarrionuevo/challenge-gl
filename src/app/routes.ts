import { Routes } from '@angular/router';
import { forumComponent } from './forum-component/forum.component';
import { PostsListComponent } from './posts-list-component/posts-list.component';

export const RouteDefinitions : Routes  = [
  { path: 'posts', component: PostsListComponent },
  { path: 'post/:postId', component: forumComponent },
  { path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  }
];