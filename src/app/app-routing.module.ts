import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerHomeComponent } from './components/owner-home/owner-home.component';
import { PetHomeComponent } from './components/pet-home/pet-home.component';
import { PetAllComponent } from './components/pet-all/pet-all.component';

const routes: Routes = [
  { path: 'owners/:ownerId/pets/:petId', component: PetHomeComponent },
  { path: 'owners/:ownerId/pets', component: PetHomeComponent },
  { path: 'owners/:ownerId', component: OwnerHomeComponent },
  { path: 'owners', component: OwnerHomeComponent },
  { path: 'pets', component: PetAllComponent },
  { path: '', redirectTo: '/owners', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
