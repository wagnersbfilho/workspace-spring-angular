import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalaReuniao } from '../sala-reuniao';
import { SalaReuniaoServiceService } from '../sala-reuniao-service.service';

@Component({
  selector: 'app-sala-reuniao-update',
  templateUrl: './sala-reuniao-update.component.html',
  styleUrls: ['./sala-reuniao-update.component.css']
})
export class SalaReuniaoUpdateComponent implements OnInit {

  id: number;
  sala;
  submitted = false;

  constructor(private route: ActivatedRoute,
      private router: Router,
      private service: SalaReuniaoServiceService) { 
        this.sala = new SalaReuniao();
        this.id = 0;
      }

  ngOnInit(): void {
    this.sala = new SalaReuniao();

    this.id = this.route.snapshot.params['id'];

    this.service.getSala(this.id)
        .subscribe(
            data => {
              console.log(data)
              this.sala = data;
            },
            error => console.log(error)
        );
  }

  atualizarSala() {
    this.service.atualizarSala(this.id, this.sala)
        .subscribe(
            data => console.log(data),
            error => console.log(error)
        );
    this.sala = new SalaReuniao();
    this.listarSalas();
  }

  listarSalas() {
    this.router.navigate(['/salas']);
  }

  onSubmit() {
    this.submitted = true;
    this.atualizarSala();    
  }

}
