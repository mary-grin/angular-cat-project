import {Component, Input, OnInit} from '@angular/core';
import {ICat} from "../../../core/store/cats/cats.state";

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  @Input() cat : ICat = {
    id: '',
    url: '',
    name: '',
    description: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
