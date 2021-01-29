import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { ClientFetch } from "../../helpers/client-fetch";
import { DataService } from "../../helpers/data.service";
import { Client } from "../../helpers/client-data";

import { MatDialog } from "@angular/material/dialog";
import { DeleteClientComponent } from "./delete-client/delete-client.component";
import { CreateClientComponent } from "./create-client/create-client.component";
import { UpdateClientComponent } from "./update-client/update-client.component";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.scss"],
})
export class ClientsComponent implements OnInit {
  exampleDatabase: DataService | null;

  index: number;
  id: number;

  displayData: boolean;
  client: ClientFetch;
  clients: Client[] = [];

  constructor(private dataservice: DataService, public dialog: MatDialog) {}

  getClients() {
    this.dataservice.getClients().subscribe((data) => {
      this.clients = data;
    });
  }
  fetchId = 0;

  getClient() {
    this.dataservice.getClient(this.fetchId).subscribe((data) => {
      this.client = data;
      this.displayData = true;
    });
  }

  deleteItem(
    i: number,
    id: number,
    nome: string,
    email: string,
    telefone: string
  ) {
    this.index = i;
    this.id = id;
    const dialogRef = this.dialog.open(DeleteClientComponent, {
      data: { id: id, nome: nome, email: email, telefone: telefone },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        this.getClients();
        this.getClient();
      }
    });
  }

  updateItem(
    i: number,
    id: number,
    nome: string,
    email: string,
    telefone: string,
    endereco: string,
    bairro: string,
    cidade: string,
    uf: string
  ) {
    this.index = i;
    this.id = id;
    const dialogRef = this.dialog.open(UpdateClientComponent, {
      data: {
        id: id,
        nome: nome,
        email: email,
        telefone: telefone,
        endereco: endereco,
        bairro: bairro,
        cidade: cidade,
        uf: uf,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        setTimeout(() => {
          this.ngOnInit();
        }, 4000);
      }
    });
  }

  addNew() {
    const dialogRef = this.dialog.open(CreateClientComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        this.getClients();
        this.getClient();
      }
    });
  }

  ngOnInit() {
    this.getClients();
    this.getClient();
  }
}
