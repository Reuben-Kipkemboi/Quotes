import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import{Quotedetails} from '../quotedetails'

@Component({
  selector: 'app-allquote',
  templateUrl: './allquote.component.html',
  styleUrls: ['./allquote.component.css']
})
export class AllquoteComponent implements OnInit {
  // help in creating a new instance of quote with the same properties
  newQuote = new Quotedetails(0, "", 0, 0, "", "")

  // ngsubmit event Emitter
  @Output() createQuote = new EventEmitter<Quotedetails>(); // create quote event emitter

  addQuote(){
    this.createQuote.emit(this.newQuote);
  }

  userquote:Quotedetails[] = [
    new Quotedetails(1, "East or west home is best", 23, 3, 'Belinda kross', 'Reuby and Reuby'),
    new Quotedetails(17, "The marathon continues.....", 59, 3, 'Nipsey Hussle, The Great', 'John Doe')
  ]; //creating of property using our class.

  addNewQuote(userquote: Quotedetails){
    let quoteLength = this.userquote.length;
    userquote.id = quoteLength+1;
    this.userquote.push(userquote);
  };

  // to get the highest vote count
  votesarray :number[] =this.userquote.map(userquote => userquote.upvotes)
  highestVotes = Math.max(...this.votesarray)

  constructor() { }

  ngOnInit(): void {
  }

}
