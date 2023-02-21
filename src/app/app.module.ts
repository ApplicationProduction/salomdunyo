import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  ROUTES, RouterModule, Routes } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LessonsComponent } from './lessons.component';
import { LessonComponent } from './lesson/lesson.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LessonsService } from './lessons.sercice';

 const routes: Routes=[
  {path: '',component: HomeComponent},
  {path:'darslar/:title', component: LessonsComponent},
  {path: 'darslar', component: LessonsComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LessonsComponent,
    LessonComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
     //AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [LessonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

