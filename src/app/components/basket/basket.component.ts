import { Component } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [FormsModule, CommonModule ],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent {

}
