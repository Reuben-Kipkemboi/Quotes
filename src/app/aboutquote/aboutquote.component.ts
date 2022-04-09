import { Component, OnInit, Input} from '@angular/core';
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

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
