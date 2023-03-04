// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Services
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
// Components
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

const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'book', component: BooksComponent },
  { path: 'creator', component: CreatorsComponent },
  { path: 'genre', component: GenresComponent },
  { path: 'post', component: PostsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardLogin] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardAdmin] },
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
