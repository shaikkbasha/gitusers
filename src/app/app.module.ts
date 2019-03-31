import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile.service';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';
import { DropdownListService } from './dropdown-list.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DropdownListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,NgbModule.forRoot(),FormsModule,ReactiveFormsModule,
  ],
  providers: [ProfileService,DropdownListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
