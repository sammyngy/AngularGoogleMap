import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'donor-list', component: DonorListComponent },
  { path: 'add-donor/:lat/:lng', component: AddDonorComponent },
  { path: '',
    redirectTo: '/donor-list',
    pathMatch: 'full'
  }
];

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonorListComponent } from './donor-list/donor-list.component';
import { AddDonorComponent } from './add-donor/add-donor.component';

@NgModule({
  declarations: [
    AppComponent,
    DonorListComponent,
    AddDonorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
