import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgFor],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  lanes = Array(8);
}
