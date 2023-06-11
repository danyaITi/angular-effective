import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/navigate/nav.component';
import { ButtonsComponent } from './components/buttons/buttons.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavComponent, ButtonsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
