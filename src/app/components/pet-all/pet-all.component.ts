import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Pet } from 'src/app/models/pet';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-all',
  templateUrl: './pet-all.component.html',
  styleUrls: ['./pet-all.component.css']
})
export class PetAllComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'breed', 'dateCreated', 'dateModified'];
  pets: Pet[] = [];

  constructor(
    private petService: PetService
  ) { }

  ngOnInit(): void {
    this.petService.getAllPets().subscribe((data: Pet[]) => {
      console.log(data);
      this.pets = data;
      this.dataSource = new MatTableDataSource(this.pets);
    });
  }

}
