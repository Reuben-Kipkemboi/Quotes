import { Component, OnInit, Input} from '@angular/core';
import{Quotedetails } from '../quotedetails';

@Component({
  selector: 'app-aboutquote',
  templateUrl: './aboutquote.component.html',
  styleUrls: ['./aboutquote.component.css']
})
export class AboutquoteComponent implements OnInit {
  @Input()
  userquote!: Quotedetails;

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
