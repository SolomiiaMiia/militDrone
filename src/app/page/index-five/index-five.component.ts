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
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';


@Component({
  selector: 'app-index-five',
  standalone: true,
  imports: [CommonModule, NavLightComponent, AboutComponent, ServicesComponent, ProductTabComponent, CtaComponent, ClientComponent, PricingComponent, BlogsComponent, GetInTouchComponent,],
  templateUrl: './index-five.component.html',
  styleUrl: './index-five.component.scss'
})
export class IndexFiveComponent {

  sendEmail(event: Event): void {
    event.preventDefault(); // Запобігає перезавантаженню сторінки

console.log( event.target as HTMLFormElement)
    emailjs
      .sendForm('service_mygmail', 'template_qpha6wx', event.target as HTMLFormElement, {
        publicKey: 'zsp73JsnjdQ2hE-lm',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Ваше повідомлення було надіслано!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
          alert('Помилка відправлення повідомлення!');
        },
      );


    // Замініть значення service_id, template_id, user_id на ваші значення
    // emailjs.sendForm('service_mygmail', 'template_qpha6wx', event.target as HTMLFormElement, 'your_user_id')
    //   .then((result: EmailJSResponseStatus) => {
    //     console.log('Email sent successfully:', result.text);
    //     alert('Ваше повідомлення було надіслано!');
    //   }, (error) => {
    //     console.error('Email sending failed:', error.text);
    //     alert('Помилка відправлення повідомлення!');
    //   });
  }
}
