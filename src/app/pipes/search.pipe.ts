import { Pipe, PipeTransform } from '@angular/core';
import {Cat} from "../interfaces/cat";
import {ICat} from "../core/store/cats/cats.state";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(cats: ICat[], input: string): ICat[] {
    return cats.filter((cat: ICat) => cat.name.toLowerCase().includes(input.toLowerCase()));
  }

}
