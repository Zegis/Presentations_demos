import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { valid_login, invalid_login } from '../store/actions/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  count$: Observable<number>;

  constructor(private store: Store<{login: number}>) {
    this.count$ = store.select('login')
  }

  valid() {
    this.store.dispatch(valid_login());
  }

  invalid() {
    this.store.dispatch(invalid_login());
  }
}
