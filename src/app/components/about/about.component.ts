import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';
import { CountUpModule } from 'ngx-countup';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CountUpModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  

  constructor(private cdr: ChangeDetectorRef) {}
  
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

}
