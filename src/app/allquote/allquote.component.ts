import { DatePipe, formatDate } from '@angular/common';
import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import{Quotedetails} from '../quotedetails'

@Component({
  selector: 'app-allquote',
  templateUrl: './allquote.component.html',
  styleUrls: ['./allquote.component.css']
})
export class AllquoteComponent implements OnInit {
  // help in creating a new instance of quote with the same properties
  newQuote = new Quotedetails(0, "", 0, 0, "", "", new Date(2022,3,4));

  // ngsubmit event Emitter
  @Output() createQuote = new EventEmitter<Quotedetails>(); // create quote event emitter
  @Output() userquoteDelete= new EventEmitter<boolean>();

  addQuote(){
    this.createQuote.emit(this.newQuote);
  }

  userquote:Quotedetails[] = [
    new Quotedetails(1, "East or west home is best", 23, 3, 'Belinda kross', 'Reuby and Reuby', new Date(2022, 3, 6)),
    new Quotedetails(17, "The marathon continues.....", 59, 3, 'Nipsey Hussle, The Great', 'John Doe', new Date(2022, 3,4))
  ]; //creating of property using our class.

  addNewQuote(userquote: Quotedetails){
    let quoteLength = this.userquote.length;
    userquote.id = quoteLength+1;
    this.userquote.push(userquote);
    userquote.additionDate = new Date(userquote.additionDate)
  };
  

  // to get the highest vote count
  votesarray :number[] =this.userquote.map(userquote => userquote.upvotes)
  highestVotes = Math.max(...this.votesarray)


  quoteDelete(userquotedelete:any){
    this.createQuote.emit(userquotedelete)
  }

  constructor() { }

  ngOnInit(): void {
  }

}


