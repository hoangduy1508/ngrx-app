import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BookListComponent } from './book-list/book-list.component';
import { GoogleBooksService } from './book-list/books.service';

@NgModule({
  declarations: [
    AppComponent,
    BookCollectionComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer })
  ],
  providers: [
    GoogleBooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
