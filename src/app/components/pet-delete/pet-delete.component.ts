import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pet } from 'src/app/models/pet';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-delete',
  templateUrl: './pet-delete.component.html',
  styleUrls: ['./pet-delete.component.css']
})
export class PetDeleteComponent implements OnInit {

  petId?: number;
  ownerId?: number;

  constructor(
    private petService: PetService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.petId = this.data.petId;
    this.ownerId = this.data.ownerId;
    this.petService.getPetById(this.ownerId!, this.petId!).subscribe((data: Pet) => {
      console.log(data);
    });
  }

  deletePets(): void {
    this.petService.deletePets(this.ownerId!, this.petId!).subscribe(() => {
      console.log('Deleted Successfully');
    });
  }

}


