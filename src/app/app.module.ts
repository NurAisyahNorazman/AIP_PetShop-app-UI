import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { OwnerHomeComponent } from './components/owner-home/owner-home.component';
import { OwnerListComponent } from './components/owner-list/owner-list.component';
import { OwnerAddComponent } from './components/owner-add/owner-add.component';
import { PetHomeComponent } from './components/pet-home/pet-home.component';
import { PetAddComponent } from './components/pet-add/pet-add.component';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { PetEditComponent } from './components/pet-edit/pet-edit.component';
import { PetDeleteComponent } from './components/pet-delete/pet-delete.component';
import { PetAllComponent } from './components/pet-all/pet-all.component';
import { OwnerDeleteComponent } from './components/owner-delete/owner-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnerHomeComponent,
    OwnerListComponent,
    OwnerAddComponent,
    PetHomeComponent,
    PetAddComponent,
    PetListComponent,
    PetEditComponent,
    PetDeleteComponent,
    PetAllComponent,
    OwnerDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
