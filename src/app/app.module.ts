import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CourselistComponent } from './courselist/courselist.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';

@NgModule({
  declarations: [
    AppComponent,
    CourselistComponent,
    AddcourseComponent,
    ViewcourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
