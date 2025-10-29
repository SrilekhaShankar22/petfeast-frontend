import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// ✅ Import your components
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { CategorySectionComponent } from './components/category-section/category-section.component';
import { SubscribeSectionComponent } from './components/subscribe-section/subscribe-section.component';

// ✅ Routing setup
const routes: Routes = [
  { path: '', component: HeroSectionComponent },
  { path: 'products', component: CategorySectionComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    CategorySectionComponent,
    SubscribeSectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
