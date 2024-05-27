import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnersComponent } from './partners/partners.component';
import { DvdsAndVideosComponent } from './dvds-and-videos/dvds-and-videos.component';
import { PartnersFormComponent } from './partners-form/partners-form.component';

const routes: Routes = [
  { path: '', component: PartnersComponent },
  { path: 'dvds-and-videos', component: DvdsAndVideosComponent },
  { path: 'new-partner', component: PartnersFormComponent },
  { path: 'new-partner/:id', component: PartnersFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
