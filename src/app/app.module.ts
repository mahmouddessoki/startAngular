import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { CutPipe } from './cut.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    NewsComponent,
    NotfoundComponent,
    NewsDetailsComponent,
    CutPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
