import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AuthorComponent } from './author/author.component';
import { AuthorsComponent } from './authors/authors.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {
    path:'', 
    component: HomeComponent
  },
  {
    path:'home', 
    component: HomeComponent
  },
  {
    path:'books', 
    component: BooksComponent
  },
  {
    path:'book/:id',
    component: BookComponent
  },
  {
    path:'authors',
    component: AuthorsComponent
  },
  {
    path:'author/:id',
    component: AuthorComponent
  },
  {
    path:'signin',
    component: LoginComponent
  },
  { path: 'register', 
    component: RegisterComponent 
  },
  { path: 'addbook', 
    component: AddBookComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
