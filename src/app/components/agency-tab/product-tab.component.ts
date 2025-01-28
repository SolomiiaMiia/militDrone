import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Slide } from '../models/slide';

@Component({
  selector: 'app-product-tab',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './product-tab.component.html',
  styleUrl: './product-tab.component.scss'
})
export class ProductTabComponent {
  
  constructor(private router: Router) {}
  
  activeIndex:number = 1
  slidesStore:Slide[] =[{
    Id:'0',
    Src:'assets/images/drone/IMG_6500.png'
  },
  {
    Id:'1',
    Src:'assets/images/drone/IMG_6500.png'
  },
  {
    Id:'2',
    Src:'assets/images/drone/IMG_6500.png'
  }];

  customOptions: OwlOptions = {
    loop: true,
    slideBy:'page',
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 2
      }
    },
    nav: true
  };

      tabClick(index:number){
        this.activeIndex = index
      }
      
      goToAboutPage() {
        this.router.navigate(['/more-info']);
      }


}
