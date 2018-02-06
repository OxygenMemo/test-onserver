import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GetTypesService } from './get-types.service';
import { TypeListComponent } from './type-list/type-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TypeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GetTypesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
