import { Component, Inject, OnInit } from '@angular/core';
import { DataService } from 'src/app/helpers/data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Client } from 'src/app/helpers/client-data';
import { ClientFetch } from 'src/app/helpers/client-fetch';

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.scss']
})
export class DeleteClientComponent implements OnInit {
  users: Client[];
  user: ClientFetch;

  constructor(public dialogRef: MatDialogRef<DeleteClientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: DataService) { }


  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.getClients();
  }

  confirmDelete(){
    this.dataService.deleteUser(this.data.id).subscribe(data => {
      this.getClients();
    });
  }

  getClients(){
    this.dataService.getClients().subscribe(data => {
      this.users = data;
    });
  }
}
