import { Component } from '@angular/core';

@Component({
  selector: 'app-palin',
  templateUrl: './palin.component.html',
  styleUrl: './palin.component.css',
})
export class PalinComponent {
  text: string = '';
  result: string = '';
  img = '';

  rev(text: string) {
    const reversed = text.split('').reverse().join('');

    if (text === '') {
      this.result = '';
      this.img = '';
      return;
    } if (text === reversed) {
      this.img = '../assets/happy.png';
      this.result = text + ' is a Palindrome';
      return;
    } else if (text !== reversed) {
      this.img = '../assets/sad.png';
      this.result = text + ' is not a Palindorme';
      return;
    }
  }
}
