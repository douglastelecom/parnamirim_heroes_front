import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path:"hero",
    loadChildren: () => import('./components/hero/hero.module').then(m => m.HeroModule)
  },
  {
    path:"power",
    loadChildren: () => import('./components/power/power.module').then(m => m.PowerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
