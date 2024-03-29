import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatalogosComponent } from './pages/catalogos/catalogos.component';
import { DenunciasComponent } from './pages/denuncias/denuncias.component';
import { CatalogosEdicionComponent } from './pages/catalogos/catalogos-edicion/catalogos-edicion.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonasComponent } from './personas/personas.component';
import { PersonasEdicionComponent } from './personas/personas-edicion/personas-edicion.component';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { SpanishPaginatorIntl } from './_utils/SpanishPaginatorIntl';
import {MatSortModule} from '@angular/material/sort';
import { CatalogosValoresComponent } from './pages/catalogos-valores/catalogos-valores.component';
import { ValoresEdicionComponent } from './pages/catalogos-valores/valores-edicion/valores-edicion.component';
import { DenunciasEdicionComponent } from './pages/denuncias/denuncias-edicion/denuncias-edicion.component';
import { PreliminarComponent } from './pages/preliminar/preliminar.component';
import { PreliminarEdicionComponent } from './pages/preliminar/preliminar-edicion/preliminar-edicion.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { UsuarioEdicionComponent } from './pages/usuario/usuario-edicion/usuario-edicion.component';
import { PreparatoriaComponent } from './pages/preparatoria/preparatoria.component';
import { PreparatoriaEdicionComponent } from './pages/preparatoria/preparatoria-edicion/preparatoria-edicion.component';
import { DenunciasNuevoComponent } from './pages/denuncias/denuncias-nuevo/denuncias-nuevo.component';
import { LoginComponent } from './pages/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { ROUTES, RouterModule } from '@angular/router';
import { AppHeaderComponent } from './pages/app-header/app-header.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CatalogosComponent,
    DenunciasComponent,
    CatalogosEdicionComponent,
    PersonasComponent,
    PersonasEdicionComponent,
    CatalogosValoresComponent,
    ValoresEdicionComponent,
    DenunciasEdicionComponent,
    PreliminarComponent,
    PreliminarEdicionComponent,
    UsuarioComponent,
    UsuarioEdicionComponent,
    PreparatoriaComponent,
    PreparatoriaEdicionComponent,
    DenunciasNuevoComponent,
    LoginComponent,
    HomeComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatCardModule,
    FormsModule
  ],
  providers: [
    {provide: MatPaginatorIntl, useClass: SpanishPaginatorIntl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
