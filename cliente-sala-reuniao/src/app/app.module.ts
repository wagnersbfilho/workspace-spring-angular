import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClienteSalaReuniaoComponent } from './cliente-sala-reuniao/cliente-sala-reuniao.component';
import { SalaReuniaoCreateComponent } from './sala-reuniao-create/sala-reuniao-create.component';
import { SalaReuniaoDetailsComponent } from './sala-reuniao-details/sala-reuniao-details.component';
import { SalaReuniaoListComponent } from './sala-reuniao-list/sala-reuniao-list.component';
import { SalaReuniaoUpdateComponent } from './sala-reuniao-update/sala-reuniao-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteSalaReuniaoComponent,
    SalaReuniaoCreateComponent,
    SalaReuniaoDetailsComponent,
    SalaReuniaoListComponent,
    SalaReuniaoUpdateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
