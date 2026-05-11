import { Component } from '@angular/core';
import { Projects } from '../projects/projects';
import content from '../../content/content.json';

@Component({
  selector: 'app-home',
  imports: [Projects],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  content = content;
}
