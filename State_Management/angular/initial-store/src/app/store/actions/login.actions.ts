import { createAction, props } from "@ngrx/store";


export const invalid_login = createAction("[Login Page] Invalid login");
export const valid_login = createAction("[Login Page] Login valid");
export const lock_account = createAction("[Login Page] - lock account");
export const unlock_account = createAction("[Login Page] - account unlocked");
export const set_login_data = createAction("[Login Page] - set login data", props<{login_count: number, locked: boolean}>() );