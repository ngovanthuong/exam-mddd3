import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AwesomeListComponent } from './awesome-list/awesome-list.component';
import { CreateAwesomeComponent } from './create-awesome/create-awesome.component';
import { EditAwesomeComponent } from './edit-awesome/edit-awesome.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AwesomeListComponent
  },
  {
    path: 'add',
  component: CreateAwesomeComponent
  },
  {
    path: 'awesome/:id/edit',
    component: EditAwesomeComponent
  },

];
@NgModule({
  declarations: [
    AppComponent,
    AwesomeListComponent,
    CreateAwesomeComponent,
    EditAwesomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
