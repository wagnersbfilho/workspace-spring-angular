import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalaReuniaoCreateComponent } from './sala-reuniao-create/sala-reuniao-create.component';
import { SalaReuniaoDetailsComponent } from './sala-reuniao-details/sala-reuniao-details.component';
import { SalaReuniaoListComponent } from './sala-reuniao-list/sala-reuniao-list.component';
import { SalaReuniaoUpdateComponent } from './sala-reuniao-update/sala-reuniao-update.component';
import { SalaReuniaoServiceService } from './sala-reuniao-service.service';
import { SalaReuniao } from './sala-reuniao';

@NgModule({
  declarations: [
    AppComponent,
    SalaReuniaoCreateComponent,
    SalaReuniaoDetailsComponent,
    SalaReuniaoListComponent,
    SalaReuniaoUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
