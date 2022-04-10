import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotedetails } from '../quotedetails'; // importing our blueprint class

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  // help in creating a new instance of quote with the same properties
  newQuote = new Quotedetails(0, "", 0, 0, "", "", new Date(2022, 3,4))

  // ngsubmit event Emitter
  @Output() createQuote = new EventEmitter<Quotedetails>(); // create quote event emitter

  addQuote(){
    this.createQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
