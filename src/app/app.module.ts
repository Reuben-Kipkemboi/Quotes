import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { HighlightquoteDirective } from './highlightquote.directive';
import { QuoteComponent } from './quote/quote.component';
import { AboutquoteComponent } from './aboutquote/aboutquote.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuoteFormComponent,
    HighlightquoteDirective,
    QuoteComponent,
    AboutquoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
