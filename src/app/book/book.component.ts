import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  title;
  author;
  genre;
  img;
  id;
 
  constructor(private route: ActivatedRoute) { }

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

  ngOnInit(): void {
    
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    let title = this.books.find( x => x.id === id).title;
    let author = this.books.find(x => x.id === id).author;
    let img = this.books.find(x => x.id === id).img;
    let genre = this.books.find(x => x.id === id).genre;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.img = img;
    this.id =id;

  }

}
