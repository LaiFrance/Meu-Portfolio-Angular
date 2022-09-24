import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { ProjetosComponent } from 'src/app/home/projetos/projetos.component';
import { ContatoComponent } from './contato/contato.component';
import { MeucurriculoComponent } from './home/meucurriculo/meucurriculo.component';
import { MeusProjetosComponent } from './home/meus-projetos/meus-projetos.component';
import { ProjetosBackComponent } from './home/projetos/projetos-back/projetos-back.component';
import { ProjetosTestesComponent } from './home/projetos/projetos-testes/projetos-testes.component';
import { SobremimComponent } from './home/sobremim/sobremim.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'reviews', component: ReviewsComponent },
    { path: 'meusprojetos', component: MeusProjetosComponent },
    { path: 'projetos', component: ProjetosComponent },
    { path: 'projetosfront', component: ProjetosComponent },
    { path: 'projetosback', component: ProjetosBackComponent },
    { path: 'projetostestes', component: ProjetosTestesComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'sobremim', component: SobremimComponent },
    { path: 'meucurriculo', component: MeucurriculoComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
