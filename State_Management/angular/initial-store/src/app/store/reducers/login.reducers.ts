import { createReducer, on } from "@ngrx/store";
import * as LoginActions from "../actions/login.actions";

export interface LoginState {
    invalid_login_tries: number,
    account_locked: boolean
}

export const initial_state: LoginState = {
    invalid_login_tries: 0,
    account_locked: false
}

export const loginReducer = createReducer(
    initial_state,
    on(LoginActions.invalid_login, state => ({...state, invalid_login_tries: state.invalid_login_tries + 1})),
    on(LoginActions.valid_login, state => ({invalid_login_tries: 0, account_locked: false})),
    on(LoginActions.lock_account, state => ({...state, account_locked: true})),
    on(LoginActions.unlock_account, state => ({...state, account_locked: false})),
    on(LoginActions.set_login_data, (state, {login_count, locked}) => ({invalid_login_tries: login_count, account_locked: locked}))
    );