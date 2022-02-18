import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalaReuniaoListComponent } from './sala-reuniao-list/sala-reuniao-list.component';
//import { RoomDetailsComponent } from './room-details/room-details.component';
import { SalaReuniaoCreateComponent } from './sala-reuniao-create/sala-reuniao-create.component';
import { SalaReuniaoUpdateComponent } from './sala-reuniao-update/sala-reuniao-update.component';

const routes: Routes = [
  { path: '', redirectTo: 'salas', pathMatch: 'full' },
  { path: 'salas', component: SalaReuniaoListComponent },
  { path: 'add', component: SalaReuniaoCreateComponent },
  { path: 'update/:id', component: SalaReuniaoUpdateComponent },
  //{ path: 'details/:id', component: RoomDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }