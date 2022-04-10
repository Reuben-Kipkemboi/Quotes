import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import{Quotedetails } from '../quotedetails';
import {faThumbsDown, faThumbsUp} from '@fortawesome/free-solid-svg-icons'; 


@Component({
  selector: 'app-aboutquote',
  templateUrl: './aboutquote.component.html',
  styleUrls: ['./aboutquote.component.css']
})
export class AboutquoteComponent implements OnInit {
  faThumbsUp =faThumbsUp
  faThumbsDown =faThumbsDown


  @Input()
  userquote!: Quotedetails;
  @Output() createQuote= new EventEmitter<boolean>();
  // delete quote
  deleteQuote(myquote:boolean){
    this.createQuote.emit(myquote)
  }

  // Addding polls on upvotes
  upvoteClick(){
    this.userquote.upvotes ++;
  }

  // downvoting the quote
  downvoteClick(){
    this.userquote.downvotes ++;
  }

  
  
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
