import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateClientComponent } from './home/clients/create-client/create-client.component';
import { DeleteClientComponent } from './home/clients/delete-client/delete-client.component';
import { UpdateClientComponent } from './home/clients/update-client/update-client.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'create', component: CreateClientComponent },
  { path: 'update', component: UpdateClientComponent },
  { path: 'delete', component: DeleteClientComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
