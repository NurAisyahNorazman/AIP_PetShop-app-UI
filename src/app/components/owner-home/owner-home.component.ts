import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OwnerAddComponent } from '../owner-add/owner-add.component';

@Component({
  selector: 'app-owner-home',
  templateUrl: './owner-home.component.html',
  styleUrls: ['./owner-home.component.css']
})
export class OwnerHomeComponent {

  constructor(private dialog: MatDialog) { }

  openOwnerFormDialog(): void {
    const dialogRef = this.dialog.open(OwnerAddComponent, {
      width: '340px'
    });
  }
}
