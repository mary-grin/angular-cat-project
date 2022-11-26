import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {Interceptor} from "./interseptors/interceptor.service";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {CatsReducer} from "./core/store/cats/cats.reducer";
import {CatsEffects} from "./core/store/cats/cats.effects";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {CoreModule} from "./core/core.module";
import {FeaturesModule} from "./features/features.module";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({cats: CatsReducer}),
    EffectsModule.forRoot([CatsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    CoreModule,
    FeaturesModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: Interceptor
  }],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
