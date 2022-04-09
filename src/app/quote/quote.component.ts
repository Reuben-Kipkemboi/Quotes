import { Component, OnInit,  Input} from '@angular/core';
import{ Quotedetails} from '../quotedetails'
import {faQuoteLeftAlt, faQuoteRight} from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  faQuoteLeftAlt =faQuoteLeftAlt 
  faQuoteRight =faQuoteRight   

  @Input()
  userquote!: Quotedetails;
  constructor() { 

  }

  ngOnInit(): void {
  }

}
