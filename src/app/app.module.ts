import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { HighlightquoteDirective } from './highlightquote.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuoteFormComponent,
    HighlightquoteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
