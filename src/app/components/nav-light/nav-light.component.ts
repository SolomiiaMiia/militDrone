// @ts-nocheck
import { CommonModule } from '@angular/common';
import { Component,  HostListener, VERSION } from '@angular/core';
import { IconsModule } from '../../icons/icons.module';

@Component({
  selector: 'app-nav-light',
  standalone: true,
  imports: [CommonModule, IconsModule],
  templateUrl: './nav-light.component.html',
  styleUrl: './nav-light.component.scss'
})
export class NavLightComponent {
  manu:boolean = false
  toggleManu(){
      this.manu = !this.manu
  }

    name = 'Angular ' + VERSION.major;
    sections: NodeListOf<HTMLElement>;
    navLi: NodeListOf<HTMLElement>;
  
    ngOnInit() {
      this.sections = document.querySelectorAll('section');
      this.navLi = document.querySelectorAll('nav .container .navigation ul li');
    }
  
    current: any = '';
    scrolled: boolean = false;

    @HostListener('window:scroll', ['$event'])
    onscroll() {
      this.sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        this.scrolled = window.scrollY > 50;
        if (scrollY >= sectionTop - 60) {
          this.current = section.getAttribute('id');
        }
      });
  
      this.navLi.forEach((li) => {
        if (li.classList.contains(this.current)) {
          li.classList.add('active');
        } else{
          li.classList.remove('active');
        }
      });
    }
  
}
