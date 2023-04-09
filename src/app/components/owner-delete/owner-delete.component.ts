import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Owner } from 'src/app/models/owner';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-owner-delete',
  templateUrl: './owner-delete.component.html',
  styleUrls: ['./owner-delete.component.css']
})
export class OwnerDeleteComponent implements OnInit {

owners!: Owner;

  constructor(
    private ownerService: OwnerService,
    @Inject(MAT_DIALOG_DATA) public data: { owners: Owner }
  ) { }

  ngOnInit(): void {
    this.owners = this.data.owners;
  }

  // deleteOwners(): void {
  //   this.ownerService.deleteOwners(this.owner.id!).subscribe(() => {
  //     console.log('Deleted Successfully');
  //   });
  // }

  deleteOwners(ownerId: number): void {
    if(this.owners.id){
      this.ownerService.deleteOwners(this.owners.id).subscribe(() => {
        console.log('Deleted Successfully');
      });
    }
  }

}
