import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopulationComponent } from './components/population/population.component'
import { DensityComponent } from './components/density/density.component'
import { LandAreaComponent } from './components/land-area/land-area.component'
const routes: Routes = [
    {path: "", component: PopulationComponent},
    {path: "density", component: DensityComponent},
    {path: "land-area", component: LandAreaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
