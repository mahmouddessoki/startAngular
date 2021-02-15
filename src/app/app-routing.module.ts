import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsComponent } from './news/news.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [

  {path : "",redirectTo : "angular", pathMatch :"full" },
  {path : "angular" ,component :HomeComponent },
  {path : "about" , component : AboutComponent},
  {path : "contact", component:ContactComponent},
  {path : "portfolio" , component:PortfolioComponent},
  {path:"news", component:NewsComponent},
  {path :"details/:id",component:NewsDetailsComponent},
  {path:"**",component :NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
