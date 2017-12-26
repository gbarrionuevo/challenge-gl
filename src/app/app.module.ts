import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { ClarityModule } from "clarity-angular";
import { RouterModule } from '@angular/router';
import { forumComponent } from './forum-component/forum.component';
import { PostsListComponent } from './posts-list-component/posts-list.component';
import { PostsService } from './services/posts.service';
import { CapitalizePipe } from './capitalize.pipe';
import { RouteDefinitions } from './routes'


@NgModule({
  declarations: [
    AppComponent,
    forumComponent,
    PostsListComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    HttpModule,
    RouterModule.forRoot(
      RouteDefinitions
    )
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
