import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { CourseService } from './course.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }