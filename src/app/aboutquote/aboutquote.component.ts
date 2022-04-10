import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import{Quotedetails } from '../quotedetails';
import {faThumbsDown, faThumbsUp, faTrashCan} from '@fortawesome/free-solid-svg-icons'; 


@Component({
  selector: 'app-aboutquote',
  templateUrl: './aboutquote.component.html',
  styleUrls: ['./aboutquote.component.css']
})
export class AboutquoteComponent implements OnInit {
  faThumbsUp =faThumbsUp
  faThumbsDown =faThumbsDown
  faTrashCan = faTrashCan

  // @Input()userquote!: Quotedetails;

  @Input() userquote!: Quotedetails;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  
   
  // Adding polls on upvotes
  upvoteClick(){
    this.userquote.upvotes ++;
  }

  // downvoting the quote
  downvoteClick(){
    this.userquote.downvotes ++;
  }

  deletequote(){
    alert('Delete quote');
  }


  constructor() {
    
   }

  ngOnInit(): void {
  }

}
