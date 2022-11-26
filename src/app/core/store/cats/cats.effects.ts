import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {getAllCats, getAllCatsFailed, getAllCatsSuccess} from "./cats.actions";
import {CatsService} from "../../../services/cats.service";

@Injectable()
export class CatsEffects {

  getAllCats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllCats),
      switchMap(() =>
        this.catsService.getCats().pipe(
          map((cats) => getAllCatsSuccess({cats: cats})),
          catchError((err) =>
            of(getAllCatsFailed({error: err})))
        )
      )
    )
  );

  constructor(private catsService: CatsService,
              private actions$: Actions) {
  }

}
