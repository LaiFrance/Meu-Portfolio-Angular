import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjetosComponent } from './home/projetos/projetos.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/footer.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SlideComponent } from './home/slide/slide.component';
import { CertificadosComponent } from './home/certificados/certificados.component';
import { MeusProjetosComponent } from './home/meus-projetos/meus-projetos.component';
import { ProjetosBackComponent } from './home/projetos/projetos-back/projetos-back.component';
import { ProjetosTestesComponent } from './home/projetos/projetos-testes/projetos-testes.component';
import { ContatoComponent } from './contato/contato.component';
import { SobremimComponent } from './home/sobremim/sobremim.component';
import { MeucurriculoComponent } from './home/meucurriculo/meucurriculo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjetosComponent,
    NavbarComponent,
    FooterComponent,
    ReviewsComponent,
    SlideComponent,
    CertificadosComponent,
    MeusProjetosComponent,
    ProjetosBackComponent,
    ProjetosTestesComponent,
    ContatoComponent,
    SobremimComponent,
    MeucurriculoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
