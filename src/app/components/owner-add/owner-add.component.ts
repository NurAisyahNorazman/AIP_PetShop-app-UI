import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OwnerService } from 'src/app/services/owner.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Location } from '@angular/common';

@Component({
  selector: 'app-owner-add',
  templateUrl: './owner-add.component.html',
  styleUrls: ['./owner-add.component.css']
})
export class OwnerAddComponent implements OnInit {

  ownerForm!: FormGroup;
  validMessage?: string;

  constructor(
    private router: Router, 
    private ownerService: OwnerService,
    private dialogRef: MatDialogRef<OwnerAddComponent>,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.ownerForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z\s]*$/) // only allow letters and whitespace
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z\s]*$/) // only allow letters and whitespace
      ]),
    });

  }

  submitOwnerForm(){
    if(this.ownerForm.valid){
      this.ownerService.addOwners(this.ownerForm.value).subscribe(
        data=>{
          this.ownerForm.reset();
          this.dialogRef.close();
          alert("New Owner has been Added!");
          location.reload();
          return true;
        }
      )
    }else{
      alert("Please check the form before submit");
    }
  }

}
