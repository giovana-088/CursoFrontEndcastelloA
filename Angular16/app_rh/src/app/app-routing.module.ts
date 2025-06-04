import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { VagasComponent } from './views/vagas/vagas.component';
import { CurriculosComponent } from './views/curriculos/curriculos.component';
import { PainelVagasComponent } from './views/painel-vagas/painel-vagas.component';

const routes: Routes = [ //rotas de Navegação da Página
  {path: "", component: HomeComponent},
  {path: "vagas", component: VagasComponent},
  {path: "curriculos", component: CurriculosComponent},
  {path: "painel-vagas", component: PainelVagasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
