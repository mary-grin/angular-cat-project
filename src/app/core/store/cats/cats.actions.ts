import {createAction, props} from "@ngrx/store";
import {Cat} from "../../../interfaces/cat";

export const getAllCats = createAction(
  '[Cats] Get All Cats'
)

export const getAllCatsSuccess = createAction(
  '[Cats] Get All Cats Success',
  props<{cats: Cat[]}>()
)

export const getAllCatsFailed = createAction(
  '[Cats] Get All Cats Failed',
  props<{error: Error}>()
)
