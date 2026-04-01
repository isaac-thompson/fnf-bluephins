import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

interface CountUnit {
  value: string;
  label: string;
}

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {
  // May 29 2026 09:00 AM AST (UTC-3)
  private readonly TARGET = new Date('2026-05-29T09:00:00-03:00').getTime();
  private intervalId: ReturnType<typeof setInterval> | null = null;

  units: CountUnit[] = [
    { value: '00', label: 'Days' },
    { value: '00', label: 'Hours' },
    { value: '00', label: 'Minutes' },
    { value: '00', label: 'Seconds' },
  ];

  eventStarted = false;

  ngOnInit(): void {
    this.tick();
    this.intervalId = setInterval(() => this.tick(), 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  private tick(): void {
    const now = Date.now();
    const diff = this.TARGET - now;

    if (diff <= 0) {
      this.eventStarted = true;
      if (this.intervalId) clearInterval(this.intervalId);
      return;
    }

    const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    this.units = [
      { value: this.pad(days),    label: 'Days' },
      { value: this.pad(hours),   label: 'Hours' },
      { value: this.pad(minutes), label: 'Minutes' },
      { value: this.pad(seconds), label: 'Seconds' },
    ];
  }

  private pad(n: number): string {
    return n.toString().padStart(2, '0');
  }
}
