import { Component, OnInit,  Input} from '@angular/core';
import{ Quotedetails} from '../quotedetails'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input()
  userquote!: Quotedetails;
  constructor() { 

  }

  ngOnInit(): void {
  }

}
