import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlComponent } from './modules/control/control.component';
import { PlanetsComponent } from './modules/planets/planets.component';

const routes: Routes = [
  { path: 'control', component: ControlComponent },
  { path: 'planeta/:planeta', component: PlanetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
