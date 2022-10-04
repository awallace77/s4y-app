import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HeaderComponent } from './components/header/header.component';
import { LargeCardComponent } from './large-card/large-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SmallCardComponent,
    HeaderComponent,
    LargeCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
