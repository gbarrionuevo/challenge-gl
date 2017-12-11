import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PostsService } from '../services/posts.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Post } from '../services/post.model';

@Component({
  selector: 'app-postWComments',
  templateUrl: './postWComments.component.html',
  styleUrls: ['./postWComments.component.css']
})
export class PostWCommentsComponent implements OnInit {

  post: any;
  comments: any;
  postId: String;
  private route$: Subscription;
  commentsFiltered: Post;
  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private location: Location)
    {}

  ngOnInit() {
      this.route$ = this.route.params.subscribe(
            (params: Params) => {
                this.postId = params['postId'];
            });
      this.post = this.postsService.getPostById(this.postId);
      this.comments = this.postsService.getPostWithComments(this.postId);
       }
  goBack() {
       this.location.back();
   }
}

