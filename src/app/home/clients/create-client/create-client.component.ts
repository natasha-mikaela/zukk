import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Client } from "../../../helpers/client-data";
import { ClientFetch } from "../../../helpers/client-fetch";
import { DataService } from "../../../helpers/data.service";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-create-client",
  templateUrl: "./create-client.component.html",
  styleUrls: ["./create-client.component.scss"],
})
export class CreateClientComponent implements OnInit {
  userFormGroup: FormGroup;
  users: Client[];
  user: ClientFetch;
  cepResult: any = "";

  constructor(
    public dialogRef: MatDialogRef<CreateClientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dataservice: DataService,
    private http: HttpClient
  ) {}

  consultaCEP(cep, form) {
    //Nova variável "cep" somente com dígitos.
    var cep = cep.replace(/\D/g, "");

    this.limpaDados();
    //Verifica se campo cep possui valor informado.
    if (cep != "") {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if (validacep.test(cep)) {
        //Consulta o webservice viacep.com.br/
        this.http
          .get("//viacep.com.br/ws/" + cep + "/json")
          .subscribe((dados) => this.popularForms(dados));
      } else {
        alert("Formato de CEP inválido.");
      }
    }
  }

  popularForms(dados) {
    this.cepResult = dados;
  }

  limpaDados() {
    this.cepResult = " ";
  }

  getClients() {
    this.dataservice.getClients().subscribe((data) => {
      this.users = data;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.userFormGroup = new FormGroup({
      nome: new FormControl(""),
      email: new FormControl(""),
      telefone: new FormControl(""),
      endereco: new FormControl(""),
      bairro: new FormControl(""),
      cidade: new FormControl(""),
      uf: new FormControl(""),
    });
    this.getClients();
  }

  addUser() {
    this.dataservice.addUser(this.userFormGroup.value).subscribe((data) => {
      this.user = data;
    });
    this.getClients();
  }
}
