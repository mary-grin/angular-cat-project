import {Component, OnInit} from '@angular/core';
import {CatsService} from "./services/cats.service";
import {Store} from "@ngrx/store";
import {getAllCats} from "./core/store/cats/cats.actions";
import {from, map, mergeMap, of} from "rxjs";
import {selectCatsItems} from "./core/store/cats/cats.selectors";
import {Cat} from "./interfaces/cat";
import {ICat} from "./core/store/cats/cats.state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cats: ICat[] = []

  constructor(private catsService: CatsService,
              private store: Store) {}

  ngOnInit() {
    this.store.dispatch(getAllCats());
    this.store.select(selectCatsItems).subscribe(value => this.cats = value)
  }
}
