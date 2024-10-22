import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavLightComponent } from '../../components/nav-light/nav-light.component';
import { AboutComponent } from '../../components/about/about.component';
import { ServicesComponent } from '../../components/services/services.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { ClientComponent } from '../../components/client/client.component';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { BlogsComponent } from '../../components/blogs/blogs.component';
import { GetInTouchComponent } from '../../components/get-in-touch/get-in-touch.component';
import { ProductTabComponent } from '../../components/agency-tab/product-tab.component';

@Component({
  selector: 'app-index-five',
  standalone: true,
  imports: [CommonModule, NavLightComponent, AboutComponent, ServicesComponent, ProductTabComponent, CtaComponent, ClientComponent, PricingComponent, BlogsComponent, GetInTouchComponent,],
  templateUrl: './index-five.component.html',
  styleUrl: './index-five.component.scss'
})
export class IndexFiveComponent {

}
