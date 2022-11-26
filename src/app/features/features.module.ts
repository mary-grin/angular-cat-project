import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsComponent } from './components/cats/cats.component';
import { CatComponent } from './components/cat/cat.component';
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import { SearchComponent } from './components/search/search.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SearchPipe} from "../pipes/search.pipe";



@NgModule({
  declarations: [
    CatsComponent,
    CatComponent,
    SearchComponent,
    SearchPipe
  ],
  exports: [
    CatsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ]
})
export class FeaturesModule { }
