import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Post } from './Post.model';

@Injectable()
export class PostsService {
 
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: Http) { }

  getPosts(): Observable<Array<Post>> {
         return this.http.get(this.apiUrl + '/posts')
            .map((res: Response) => {
                const data = res.json();
                return data;
            });
    }

  getPostById(postId): Observable<{}> {
         return this.http.get(this.apiUrl + '/posts/' + postId)
            .map((res: Response) => {
                const data = res.json();
                return Observable.of(data);
            });
    }

  getPostWithComments(postId): Observable<{}> {
         
         return this.http.get(this.apiUrl + '/comments/')
            .map((res: Response) => {
                const data = res.json()
                const filteredComments= data.filter( 
                    comment => comment.postId === +postId
                    );
                return filteredComments;
            });
    }
}

