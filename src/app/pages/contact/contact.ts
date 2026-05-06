import { Component } from '@angular/core';
import content from '../../content/content.json';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  content = content;
}
