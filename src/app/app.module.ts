import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule }
  from "@angular/platform-browser/animations";
import { ToastModule } from "primeng/toast";
import { PanelModule } from "primeng/panel";
import { MatCarouselModule } from '@thouet/material-carousel';
import { MatCarousel, MatCarouselComponent } from '@thouet/material-carousel';
const routes: Routes = [
  { path: '', component: MyComponentComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrganizationChartModule,
    ToastModule,
    PanelModule,
    BrowserAnimationsModule,
    MatCarouselModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
