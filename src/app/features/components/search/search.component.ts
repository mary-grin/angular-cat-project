import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formSearch: FormGroup;
  @Output() searchEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.formSearch = new FormGroup({
      search: new FormControl
    })
  }

}
