import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Owner } from 'src/app/models/owner';
import { Pet } from 'src/app/models/pet';
import { PetService } from 'src/app/services/pet.service';
import { MatDialog } from '@angular/material/dialog';
import { PetAddComponent } from '../pet-add/pet-add.component';

@Component({
  selector: 'app-pet-home',
  templateUrl: './pet-home.component.html',
  styleUrls: ['./pet-home.component.css']
})
export class PetHomeComponent implements OnInit {

  ownerId!: number;
  owner?: Owner;
  pets: Pet[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private petService: PetService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.ownerId = +this.activatedRoute.snapshot.params['ownerId'];
    this.petService.getPetsByOwnerId(this.ownerId).subscribe((data: Pet[]) => {
      console.log(data);
      this.pets = data;
    });
  }

  openPetFormDialog(ownerId: number): void {
    const dialogRef = this.dialog.open(PetAddComponent, {
      width: '340px',
      data: { ownerId: ownerId }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The pet form dialog was closed');
    });
  }

}
