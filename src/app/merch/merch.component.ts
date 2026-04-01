import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-merch',
  standalone: true,
  imports: [NgFor],
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.scss']
})
export class MerchComponent {
  items = [
    { src: 'images/merch-01.png', label: 'Hoodie' },
    { src: 'images/merch-02.png', label: 'Long Sleeve' },
    { src: 'images/merch-03.png', label: 'Crewneck' },
    { src: 'images/merch-04.png', label: 'T-Shirt' },
  ];
}
