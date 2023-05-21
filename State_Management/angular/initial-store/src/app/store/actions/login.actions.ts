import { createAction } from "@ngrx/store";

export const invalid_login = createAction("Login - invalid login");
export const valid_login = createAction("Login - Login valid");