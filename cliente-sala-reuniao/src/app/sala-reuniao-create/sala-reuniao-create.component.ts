import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalaReuniao } from '../sala-reuniao';
import { SalaReuniaoServiceService } from '../sala-reuniao-service.service';

@Component({
  selector: 'app-sala-reuniao-create',
  templateUrl: './sala-reuniao-create.component.html',
  styleUrls: ['./sala-reuniao-create.component.css']
})
export class SalaReuniaoCreateComponent implements OnInit {

  sala: SalaReuniao = new SalaReuniao();;
  submitted = false;

  constructor(private service: SalaReuniaoServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  instanciarSala(): void {
    this.submitted = false;
    this.sala = new SalaReuniao();
  }

  inserirSala() {
    this.service.inserirSala(this.sala)
      .subscribe(data => console.log(data),
                error => console.log(error));
    this.sala = new SalaReuniao();
    this.listarSalas();
  }

  listarSalas() {
    this.router.navigate(['/salas']);
  }

  onSubmit() {
    this.submitted = true;
    this.inserirSala();    
  }

}
