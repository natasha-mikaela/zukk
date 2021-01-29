import {InMemoryDbService} from 'angular-in-memory-web-api';
import { Client } from './client-data';
import { ClientFetch } from './client-fetch';


export class ClientData implements InMemoryDbService {
  createDb(){
    let clients: Client[] = [
      { id: 1, nome: 'Yoda', email: 'gmail@yoda.com', telefone: '(00) 0000-0000', endereco: 'Star Wars', bairro: 'br', cidade: 'Republica', uf: 'uf'  },
      { id: 2, nome: 'Anakin', email: 'darthvader@imperio.com', telefone: '(00) 0000-0000', endereco: 'Star Wars', bairro: 'br', cidade: 'Republica', uf: 'uf'  },
      { id: 3, nome: 'Padmé Amidala', email: 'sabe@doppelganger.com', telefone: '(00) 0000-0000', endereco: 'Star Wars', bairro: 'br', cidade: 'Republica', uf: 'uf'  },
      { id: 4, nome: 'R2D2', email: 'bb8@droid.com', telefone : '(00) 0000-0000', endereco: 'Star Wars', bairro: 'br', cidade: 'Republica', uf: 'uf' },
      { id: 5, nome: 'Jar Jar Binks', email: 'jarjar@binks.com', telefone: '(00) 0000-0000', endereco: 'Star Wars', bairro: 'br', cidade: 'Republica', uf: 'uf'  }

    ];
    const client: ClientFetch[]=[
      { 
        id: 1,
        nome: 'Yoda', 
        email: 'gmail@yoda.com', 
        telefone: '(00) 0000-0000', 
        endereco: 'Star Wars', 
        bairro: 'br', 
        cidade: 'Republica', 
        uf: 'uf'  
      },
      { 
        id: 2,
        nome: 'Anakin', 
        email: 'darthvader@imperio.com', 
        telefone: '(00) 0000-0000', 
        endereco: 'Star Wars', 
        bairro: 'br', 
        cidade: 'Republica', 
        uf: 'uf'  
      },
      { 
        id: 3,
        nome: 'Padmé Amidala', 
        email: 'sabe@doppelganger.com', 
        telefone: '(00) 0000-0000', 
        endereco: 'Star Wars', 
        bairro: 'br', 
        cidade: 'Republica', 
        uf: 'uf'  
      },
      { 
        id: 4,
        nome: 'R2D2', 
        email: 'bb8@droid.com', 
        telefone : '(00) 0000-0000', 
        endereco: 'Star Wars', 
        bairro: 'br', 
        cidade: 'Republica', 
        uf: 'uf' 
      },
      { 
        id: 5,
        nome: 'Jar Jar Binks', 
        email: 'jarjar@binks.com', 
        telefone: '(00) 0000-0000', 
        endereco: 'Star Wars', 
        bairro: 'br', 
        cidade: 'Republica', 
        uf: 'uf'  
      }
     ];
    return {clients, client};
  }
}