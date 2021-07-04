import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  name;
  bookname;
  publishedyear;
  img;
  id;

  constructor(private route: ActivatedRoute) { }

  authors = [
    {
      id:0,
      name: "R P N sing",
      bookname: "Politics of Opportunism",
      publishedyear:2019,
      img:"assets/images/rpn.jpg"
  },
  {
      id:1,
      name: "Vasdev Mohi",
      bookname: "Cheque book",
      publishedyear:2018,
      img:"assets/images/vasavi.jpg"
 },
 {
      id:2, 
      name: "Viswanath Anand",
      bookname: "Mind master",
      publishedyear:2019,
      img:"assets/images/master.jpg"
 },
 {    
      id:3,
      name: "Vikram Sampath",
      bookname: "Savarkar",
      publishedyear:2019,
      img:"assets/images/vikram.jpg"
 }
]

  ngOnInit(): void {
    
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    let name = this.authors.find( x => x.id === id).name;
    let bookname = this.authors.find(x => x.id === id).bookname;
    let img = this.authors.find(x => x.id === id).img;
    let publishedyear = this.authors.find(x => x.id === id).publishedyear;
    this.name = name;
    this.bookname = bookname;
    this.publishedyear = publishedyear;
    this.img = img;
    this.id =id;

  }
}
