import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor(private router: Router) { }
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
  }

  onSelect(author){
    this.router.navigate(['/author',author.id])
  }
  

}
