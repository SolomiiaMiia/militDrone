import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-get-in-touch',
  standalone: true,
  imports: [],
  templateUrl: './get-in-touch.component.html',
  styleUrl: './get-in-touch.component.scss'
})
export class GetInTouchComponent {

  sendEmail(event: Event): void {
    event.preventDefault(); // Запобігає перезавантаженню сторінки

console.log( event.target as HTMLFormElement)
    emailjs
      .sendForm('service_h7w7lwg', 'template_osvtb1n', event.target as HTMLFormElement, {
        publicKey: 'H8HfhrQ7I7g_hqm6q',
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
  }

}
