import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Owner } from 'src/app/models/owner';
import { Pet } from 'src/app/models/pet';
import { PetService } from 'src/app/services/pet.service';
import { MatTableDataSource } from '@angular/material/table';
import { PetEditComponent } from '../pet-edit/pet-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { PetDeleteComponent } from '../pet-delete/pet-delete.component';
import { Location } from '@angular/common';


@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'breed', 'dateCreated', 'dateModified', 'action'];

  ownerId!: number;
  owner?: Owner;
  pets: Pet[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private petService: PetService,
    private dialog: MatDialog,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.ownerId = +this.activatedRoute.snapshot.params['ownerId'];
    this.petService.getPetsByOwnerId(this.ownerId).subscribe((data: Pet[]) => {
      console.log(data);
      this.pets = data;
      this.dataSource = new MatTableDataSource(this.pets);
    });
  }

  openPetEditFormDialog(petId: number): void {
    const dialogRef = this.dialog.open(PetEditComponent, {
      width: '340px',
      data: { ownerId: this.ownerId, petId: petId }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.location.replaceState('/owners/' + this.ownerId + '/pets');
      console.log('The pet form dialog was closed');
    });
  }

  openPetDelFormDialog(petId: number): void {
    const dialogRef = this.dialog.open(PetDeleteComponent, {
      width: '340px',
      data: { ownerId: this.ownerId, petId: petId }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.location.replaceState('/owners/' + this.ownerId + '/pets');
      location.reload();
      console.log('The pet del dialog was closed');
    });
  }

}
