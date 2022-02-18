import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalaReuniao } from '../sala-reuniao';
import { SalaReuniaoServiceService } from '../sala-reuniao-service.service';

@Component({
  selector: 'app-sala-reuniao-details',
  templateUrl: './sala-reuniao-details.component.html',
  styleUrls: ['./sala-reuniao-details.component.css']
})
export class SalaReuniaoDetailsComponent implements OnInit {

id: number;
sala: SalaReuniao;

  constructor(private route: ActivatedRoute,
        private router: Router,
        private service: SalaReuniaoServiceService) { 
    this.id = 0;
    this.sala = new SalaReuniao();
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

  listar(){
    this.router.navigate(['salas']);
  }
}
