import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { CountUpModule } from 'ngx-countup';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CountUpModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  @ViewChild('videoPlayer', { static: false }) videoPlayer!: ElementRef<HTMLVideoElement>;

  constructor(private cdr: ChangeDetectorRef) {}
  
  ngAfterViewInit() {
    this.cdr.detectChanges();
    this.videoPlayer.nativeElement.play();
  }

}
