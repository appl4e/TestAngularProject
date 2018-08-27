import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes} from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MarvelHeros } from './marvel-heros/marvel-heros.component';
import { DcComicsComponent } from './dc-comics/dc-comics.component';


const routeLists : Routes = [
  { path: "", component: MarvelHeros},
  { path: "dc", component: DcComicsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MarvelHeros,
    DcComicsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeLists)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
