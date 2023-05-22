import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoginState } from "../reducers/login.reducers";

export const loginFeature = createFeatureSelector<LoginState>('login')

export const selectCount = createSelector(loginFeature, (state) => state.invalid_login_tries)

export const selectStatus = createSelector(loginFeature, (state) => state.account_locked);