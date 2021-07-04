import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private router:Router) { }

   books = [
    {
      id:0,
      title:'The Dreamt Land',
      author:'Gregory Barber',
      genre:'science',
      img:"assets/images/dreamt.jpg"
  },
  {
      id:1,
      title:'The Man Who Solved Market',
      author:'Daniel Oberhaus',
      genre:'buisness',
      img:"assets/images/the man.jpg"
  },
  {   id:2,
      title:'Alchol In Space',
      author:'Chris Carberry',
      genre:'science',
      img:"assets/images/al.jpg"
  },
  {
      id:3,
      title:'Good To Go',
      author:'Christie Aschwanden',
      genre:'science',
      img:"assets/images/good.jpg"
  }
]


  ngOnInit(): void { }

  onSelect(book){
    this.router.navigate(['/book',book.id])
  }
  
  }


