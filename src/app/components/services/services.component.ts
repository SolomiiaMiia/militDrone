import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IconsModule } from '../../icons/icons.module';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, IconsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements
  OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
  }

  serviceData = [
    {
      icon: 'trending-up',
      title: 'Тестування виробів',
      desc: 'Вдале проходження тестувань та виконання завдань'
    },
    {
      icon: 'compass',
      title: 'Практичність',
      desc: 'Зручна в підключенні і експлуатації'
    },
    {
      icon: 'command',
      title: 'Продуманий дизайн',
      desc: `Мала вага`
    },

    {
      icon: 'monitor',
      title: 'Сучасні компоненти',
      desc: '3 інтеграції з inav, beta flight, adrdupilot'
    },
  ]

}