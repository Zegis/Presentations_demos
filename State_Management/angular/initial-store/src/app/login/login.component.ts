import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as LoginActions  from '../store/actions/login.actions';
import {selectCount, selectStatus} from '../store/selectors/login.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  count$ = this.store.select(selectCount);
  status$ = this.store.select(selectStatus);

  constructor(private store: Store) { }

  valid() {
    this.store.dispatch(LoginActions.valid_login());
  }

  invalid() {
    this.store.dispatch(LoginActions.invalid_login());
  }

  lock() {
    this.store.dispatch(LoginActions.lock_account());
  }

  unlock() {
    this.store.dispatch(LoginActions.unlock_account());
  }

  set() {
    this.store.dispatch(LoginActions.set_login_data({login_count: Math.floor(Math.random() * 10 + 1), locked: true}));
  }
}
