import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PlanetasService } from 'src/app/services/planetas.service';
import { PlanetsComponent } from '../planets/planets.component';

@Component({
    providers: [ PlanetsComponent ],
    selector: 'app-control',
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  planetas = new Array();
  mensaje = '';
  countdown = 10;
  isCountingDown = false;
  engineOn = false;

  constructor(private planetasService: PlanetasService, private planetComp: PlanetsComponent) {
  }

  ngOnInit() {
      this.mensaje = 'Idle';
      this.planetasService.getPlanetas().subscribe((data) => {
      });
    }

    ignite() {
      this.isCountingDown  = true;
      this.mensaje = '' + this.countdown + '';
      if ( this.countdown > 0 && this.isCountingDown) {
        if ( this.countdown <= 5) {
          document.getElementById('tresa-mainship').classList.toggle('shaking');
          document.getElementById('tresa-cabin').classList.toggle('shaking');
          document.getElementById('tresa-engine').classList.toggle('shaking');
        }
        setTimeout(() => {
          this.countdown--;
          this.ignite();
        }, 1000);
      } else {
        document.getElementById('tresa-cabin').classList.toggle('stowed');
        document.getElementById('tresa-engine').classList.toggle('stowed');
        this.isCountingDown = false;
        this.mensaje = 'GO';
        this.fly();
        if ( !this.engineOn ) {
          this.engineOn = true;
          document.getElementById('tresa-rocketfire').classList.toggle('engineon');
        }
      }
    }

    fly() {
      if ( this.planetComp.esPlaneta ) {
        this.planetComp.zoomPlanet();
        this.zoomShip();
      }
    }

    public zoomShip() {
      document.getElementById('main-ship').classList.toggle('zoomed-ship');
      document.getElementById('tresa-rocketfire').classList.toggle('zoomed-ship');
    }
}
