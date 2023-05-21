import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './login/login.component';
import { loginReducer } from './store/reducers/login.reducers';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({login : loginReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
