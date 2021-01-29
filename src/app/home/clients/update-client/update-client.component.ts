import { Component, Inject, OnInit } from '@angular/core';
import { Client } from '../../../helpers/client-data';
import { ClientFetch } from '../../../helpers/client-fetch';
import { DataService } from '../../../helpers/data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.scss']
})
export class UpdateClientComponent implements OnInit {
  clientFormGroup: FormGroup;
  users: Client[];
  user: ClientFetch;
  nome: any; 
  email: any; 
  telefone: any; 
  endereco: any; 
  bairro: any; 
  cidade: any; 
  uf: any;

  constructor(
    public dialogRef: MatDialogRef<UpdateClientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    public dataService: DataService
  ) { }
    
  
  getClients(){
    this.dataService.getClients().subscribe(data => {
      this.users = data;
    });
  }

  onNoClick(): void {
  this.dialogRef.close();
  }

  ngOnInit() {
    this.clientFormGroup = new FormGroup(
      {
        nome : new FormControl(''), 
        email : new FormControl(''), 
        telefone : new FormControl(''),
        endereco : new FormControl(''), 
        bairro : new FormControl(''), 
        cidade : new FormControl(''), 
        uf : new FormControl('')
      },
    );
    this.getClients();
  }


  updateClient() {

    this.nome = this.clientFormGroup.controls['nome'].value ? this.clientFormGroup.controls['nome'].value : this.data.nome;
    this.email = this.clientFormGroup.controls['email'].value ? this.clientFormGroup.controls['email'].value : this.data.email;
    this.telefone = this.clientFormGroup.controls['telefone'].value ? this.clientFormGroup.controls['telefone'].value : this.data.telefone;
    this.endereco = this.clientFormGroup.controls['endereco'].value ? this.clientFormGroup.controls['endereco'].value : this.data.endereco;
    this.bairro = this.clientFormGroup.controls['bairro'].value ? this.clientFormGroup.controls['bairro'].value : this.data.bairro;
    this.cidade = this.clientFormGroup.controls['cidade'].value ? this.clientFormGroup.controls['cidade'].value : this.data.cidade;
    this.uf = this.clientFormGroup.controls['uf'].value ? this.clientFormGroup.controls['uf'].value : this.data.uf;

    this.dataService.getClient(this.data.id).subscribe(data => {
      this.user = data;
      this.user.nome = this.nome;
      this.user.email = this.email;
      this.user.telefone = this.telefone;
      this.user.endereco = this.endereco;
      this.user.bairro = this.bairro;
      this.user.cidade = this.cidade;
      this.user.uf = this.uf;
      this.dataService.updateUser(this.user).subscribe(data1 => {
        this.getClients();
      });
    });
  this.getClients();
  }
}
