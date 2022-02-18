//import { RoomDetailsComponent } from 'src/app/sala-reuniao-details/sala-reuniao-details.component';
import { Observable } from "rxjs";
import { SalaReuniaoServiceService } from "../sala-reuniao-service.service";
import { SalaReuniao } from "../sala-reuniao";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sala-reuniao-list',
  templateUrl: './sala-reuniao-list.component.html',
  styleUrls: ['./sala-reuniao-list.component.css']
})
export class SalaReuniaoListComponent implements OnInit {

  salas: Observable<SalaReuniao[]> | undefined;

  constructor(private salaReuniaoService: SalaReuniaoServiceService,
    private router: Router) {
      
    }

    ngOnInit() {
      this.reloadData();
    }
  
    reloadData() {
      this.salas = this.salaReuniaoService.getListaSalas();
    }
  
    deleteSala(id: number) {
      this.salaReuniaoService.apagarSala(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }
  
    salaDetails(id: number){
      this.router.navigate(['details', id]);
    }
  
    updateSala(id: number){
      this.router.navigate(['update', id]);
    }

}
