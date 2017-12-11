import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../services/post.model'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  postsList: any;
  constructor(
    private postsService: PostsService,
    private router: Router)
    {}

  ngOnInit() {
      this.postsList = this.postsService.getPosts()
  }

   goPostWComments(postId) {
       this.router.navigate(['/post', postId]);
    }

}
