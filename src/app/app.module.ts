import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { HighlightquoteDirective } from './highlightquote.directive';
import { QuoteComponent } from './quote/quote.component';
import { AboutquoteComponent } from './aboutquote/aboutquote.component';
import { AllquoteComponent } from './allquote/allquote.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuoteFormComponent,
    HighlightquoteDirective,
    QuoteComponent,
    AboutquoteComponent,
    AllquoteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule    
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
