import { Component } from '@angular/core';
import content from '../../content/content.json';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  content = content;
}
