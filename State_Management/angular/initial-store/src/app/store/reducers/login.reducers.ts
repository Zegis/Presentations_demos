import { createReducer, on } from "@ngrx/store";
import { invalid_login, valid_login } from "../actions/login.actions";

export const initial_state = 0;

export const loginReducer = createReducer(
    initial_state,
    on(invalid_login, (state) => state + 1),
    on(valid_login, (state) => 0)
    );