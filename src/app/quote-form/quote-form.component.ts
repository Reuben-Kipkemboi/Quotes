import { Component, OnInit } from '@angular/core';
import { Quotedetails } from '../quotedetails'; // importing our blueprint class

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  userquote:Quotedetails[] = [
    new Quotedetails(1, "East or west home is best", 0, 0, 'Belinda kross', 'Reuby and Reuby'),
    new Quotedetails(4, "East or west home is best", 0, 0, 'Jane Doe', 'Reuben Kipkemboi'),
    new Quotedetails(17, "The marathon continues.....", 0, 0, 'The Great Nipsey Hussle', 'John Doe')
  ]; //creating of property using our class.

  constructor() { }

  ngOnInit(): void {
  }

}
