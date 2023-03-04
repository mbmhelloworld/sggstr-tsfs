// Angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
// Modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
// Services
import { BookService } from './services/book.service';
import { CreatorService } from './services/creator.service';
import { GenreService } from './services/genre.service';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
// Components
import { AppComponent } from './app.component';
import { FrontPageComponent } from './components/frontPage/frontPage.component';
import { RegisterComponent } from './components/administration/register/register.component';
import { LoginComponent } from './components/administration/login/login.component';
import { LogoutComponent } from './components/administration/logout/logout.component';
import { AccountComponent } from './components/administration/account/account.component';
import { AdminComponent } from './components/administration/admin/admin.component';
import { NotFoundComponent } from './components/administration/not-found/not-found.component';
import { BooksComponent } from './components/books/books.component';
import { CreatorsComponent } from './components/creators/creators.component';
import { GenresComponent } from './components/genres/genres.component';
import { PostsComponent } from './components/posts/posts.component';
import { AddCreatorComponent } from './components/creators/add-creator/add-creator.component';
import { AddBookComponent } from './components/books/add-book/add-book.component';
import { AddGenreComponent } from './components/genres/add-genre/add-genre.component';
import { AddPostComponent } from './components/posts/add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    AdminComponent,
    NotFoundComponent,
    BooksComponent,
    CreatorsComponent,
    GenresComponent,
    PostsComponent,
    AddCreatorComponent,
    AddBookComponent,
    AddGenreComponent,
    AddPostComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: (): string | null => localStorage.getItem('token'),
        // allowedDomains: ['localhost:3000', 'localhost:4200']
      }
    })
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    BookService,
    CreatorService,
    GenreService,
    PostService,
    UserService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
