import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lowercase } from './lowercase.pipe';
import { XAmountOfCharactersPipe } from './x-amount-of-characters.pipe';
import { FilterPetsPipe } from './filter-pets.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Lowercase,
    XAmountOfCharactersPipe,
    FilterPetsPipe
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
