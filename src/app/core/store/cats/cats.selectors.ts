import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CatsState} from "./cats.state";

export const selectCats = createFeatureSelector<CatsState>('cats');

export const selectCatsItems = createSelector(selectCats, (state: CatsState) => state.cats);
