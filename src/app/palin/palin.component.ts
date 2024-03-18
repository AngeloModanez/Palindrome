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
      this.img = '';
      this.result = '';
      return;
    } else if (text === reversed) {
      this.result = 'Its a Palindrome';
      return;
    } else if (text !== reversed) {
      this.result = 'Its not a Palindorme';
      return;
    }
  }
}
