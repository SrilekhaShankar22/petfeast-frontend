import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { HeroSectionComponent } from './hero-section/hero-section';
import { CategoryComponent } from './category/category';
import { AboutComponent } from './about/about';
import { FooterComponent } from './footer/footer';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroSectionComponent, CategoryComponent, AboutComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}
