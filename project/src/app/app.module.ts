import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ComposeComponent } from './compose/compose.component';
import { CompComponent } from './comp/comp.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { InboxComponent } from './inbox/inbox.component';
import { Inbox1Component } from './inbox1/inbox1.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ComposeComponent,
    CompComponent,
    LoginComponent,
    InboxComponent,
    Inbox1Component,
    NavbarComponent,
 
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
