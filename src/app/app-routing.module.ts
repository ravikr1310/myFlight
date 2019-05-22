import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultComponent } from './search-result/search-result.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TicketComponent } from './components/ticket/ticket.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'search', component:SearchResultComponent},
  {path:'about', component:AboutComponent},
  {path:'ticket',component:TicketComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
