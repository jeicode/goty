import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { GotyComponent } from './pages/goty/goty.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    GotyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ComponentsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
