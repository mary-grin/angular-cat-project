import {createReducer, on} from "@ngrx/store";
import {getAllCatsFailed, getAllCatsSuccess} from "./cats.actions";
import {CatsInitialState, ICat} from "./cats.state";

export const CatsReducer = createReducer(
  CatsInitialState,
  on(getAllCatsSuccess, (state, {cats}) => {
    const transformCats: ICat[] = [];
    cats.forEach(cat => {
      if (cat.breeds[0]) {
        console.log()
        transformCats.push({
          id: cat.id,
          url: cat.url,
          name: cat.breeds[0].name,
          description: cat.breeds[0].description})
      }
    })
    return {cats: transformCats}
  }),
  on(getAllCatsFailed, (state, err) => {
    console.log(err.error.message);
    return state;
  })
)
