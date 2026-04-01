import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-sponsors',
  standalone: true,
  imports: [NgFor],
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent {
  // Replace with real sponsor data when available:
  // { name: 'Acme Corp', logoUrl: 'assets/images/sponsors/acme.png', website: 'https://acme.com' }
  placeholderSlots = Array(6);
}
