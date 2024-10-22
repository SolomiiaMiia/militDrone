import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-tab.component.html',
  styleUrl: './product-tab.component.scss'
})
export class ProductTabComponent {
  constructor(private router: Router) {}
  
  activeIndex:number = 1

      tabClick(index:number){
        this.activeIndex = index
      }
      
      goToAboutPage() {
        this.router.navigate(['/more-info']);
      }
}
