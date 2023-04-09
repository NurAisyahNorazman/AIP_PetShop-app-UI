import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from 'src/app/services/pet.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { Owner } from 'src/app/models/owner';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent implements OnInit {

  owners!: Owner;
  petForm!: FormGroup;
  validMessage?: string;

  constructor(
    private router: Router,
    private petService: PetService,
    private activatedRoute: ActivatedRoute,
    private dialogRef: MatDialogRef<PetAddComponent>,
    private location: Location,
    @Inject(MAT_DIALOG_DATA) public data: { ownerId: number }
  ) { }

  get ownerId(): number {
     return this.data.ownerId;
  }

  ngOnInit(): void {
    this.petForm = new FormGroup({
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
    if (this.petForm.valid) {
      this.petService.addPets(this.ownerId, this.petForm.value).subscribe(
        data => {
          this.petForm.reset();
          this.dialogRef.close();
          alert("New Pet has been Added!");
          location.reload();
          return true;
        }
      )
    } else {
      alert("Please check the form before submit");
    }
  }

}
