import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { SwitcherComponent } from './components/switcher/switcher.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NavLightComponent } from "./components/nav-light/nav-light.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, SwitcherComponent, NavbarComponent, NavLightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'upcover';
  
}
