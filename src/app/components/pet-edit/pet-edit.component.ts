import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from 'src/app/services/pet.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { Owner } from 'src/app/models/owner';
import { Pet } from 'src/app/models/pet';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {

  owners!: Owner;
  petEditForm!: FormGroup;
  petId?: number;
  ownerId?: number;

  constructor(
    private router: Router,
    private petService: PetService,
    private activatedRoute: ActivatedRoute,
    private dialogRef: MatDialogRef<PetEditComponent>,
    private location: Location,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.petId = this.data.petId;
    this.ownerId = this.data.ownerId;
    this.petService.getPetById(this.ownerId!, this.petId!).subscribe((data: Pet) => {
      console.log(data);
      this.petEditForm.patchValue({
        name: data.name,
        breed: data.breed
      });
    });
    this.petEditForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z\s]*$/) // only allow letters and whitespace
      ]),
      breed: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z\s]*$/) // only allow letters and whitespace
      ]),
    });

  }

  submitPetForm() {
    if (this.petEditForm.valid) {
      this.petService.editPets(this.ownerId!, this.petId!, this.petEditForm.value).subscribe(
        data => {
          this.petEditForm.reset();
          this.dialogRef.close();
          alert("Pet Data has been Updated!");
          location.reload();
          return true;
        }
      )
    } else {
      alert("Please check the form before submit");
    }
  }
}
