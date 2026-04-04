import { Component, computed, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-live-stream',
  standalone: true,
  templateUrl: './live-stream.component.html',
  styleUrls: ['./live-stream.component.scss'],
})
export class LiveStreamComponent {
  // ── Set this to your YouTube/Twitch embed URL when you go live ──────────
  // YouTube embed format: https://www.youtube.com/embed/LIVE_VIDEO_ID
  // Leave as empty string to show the "Coming Soon" state
  private readonly rawStreamUrl = signal<string>('');
  // ────────────────────────────────────────────────────────────────────────

  // External watch link (same video, opens in new tab)
  readonly externalUrl = computed(() =>
    this.rawStreamUrl()
      ? this.rawStreamUrl().replace('/embed/', '/watch?v=').replace('youtube.com/embed/', 'youtube.com/watch?v=')
      : ''
  );

  readonly isLive = computed(() => this.rawStreamUrl().length > 0);

  readonly safeStreamUrl = computed<SafeResourceUrl | null>(() =>
    this.isLive() ? this.sanitizer.bypassSecurityTrustResourceUrl(this.rawStreamUrl()) : null
  );

  constructor(private readonly sanitizer: DomSanitizer) {}
}
