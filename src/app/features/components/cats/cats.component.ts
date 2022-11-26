import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ICat} from "../../../core/store/cats/cats.state";
import {MatPaginator, PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  @Input() cats: ICat[] = [];
  searchValue: string = ''
  pageEvent: PageEvent;
  currentCatsLength: number = 100;
  @ViewChild('paginator') paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
  }

  search(formValue: {search: string}) {
    this.searchValue = formValue.search;
    const currentCats: ICat[] = this.cats.filter((cat: ICat) => {
      return cat.name.toLowerCase().includes(formValue.search.toLowerCase())
    });
    this.currentCatsLength = currentCats.length;
    this.paginator.pageIndex = 0;
  }
}
