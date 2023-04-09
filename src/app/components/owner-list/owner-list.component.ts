import { Component, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/services/owner.service';
import { Owner } from 'src/app/models/owner';
import { MatTableDataSource } from '@angular/material/table';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { OwnerDeleteComponent } from '../owner-delete/owner-delete.component';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;
  owners: Owner [] = [];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'dateCreated','dateModified','pets'];
  ownerId!: number;

  constructor(
    private ownerService: OwnerService,
    private dialog: MatDialog,
    private location: Location
    ){}

  ngOnInit(): void {
    this.ownerService.getOwners().subscribe((data: Owner[]) => {
      console.log(data);
      this.owners = data;
      this.dataSource = new MatTableDataSource(this.owners);
    });
  }

  openOwnerDelFormDialog(owners: Owner): void {
    const dialogRef = this.dialog.open(OwnerDeleteComponent, {
      width: '340px',
      data: { owners: owners}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.location.replaceState('/owners');
      location.reload();
      console.log('The owner del dialog was closed');
    });
  }

}
