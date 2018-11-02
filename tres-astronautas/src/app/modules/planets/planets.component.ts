import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanetasService } from '../../services/planetas.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  public planetasArr = new Array();
  public planetDetails = { img: '', degree : ''};
  public planetaVisitado: string;
  public esPlaneta = false;

  constructor(private router: Router, private planetasService: PlanetasService) {
    this.planetaVisitado = this.router.url;
    this.planetaVisitado = this.planetaVisitado.substring(this.planetaVisitado.lastIndexOf('/') + 1);
    this.planetasService.getPlanetas().subscribe((data) => {
      this.planetasArr = data.planetas;
      if (this.planetasArr.indexOf( this.planetaVisitado ) >= 0) {
        this.esPlaneta = true;
        for (const key in data.images) {
            if ( key === this.planetaVisitado ) {
              const value = data.images[key];
              this.planetDetails.img = value.img;
              this.planetDetails.degree = value.degrees + ',0000';
            }
          }
      } else {
        this.esPlaneta = false;
        console.log( 'El planeta ' + this.planetaVisitado + ' no se encuentra en este sistema solar');
      }
    });
  }

  ngOnInit() {
  }

  public zoomPlanet() {
    document.getElementById('tresa-planet').classList.toggle('planet-zoomed');
  }
}
