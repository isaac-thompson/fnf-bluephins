import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { EventInfoComponent } from './event-info/event-info.component';
import { MeetInfoComponent } from './meet-info/meet-info.component';
import { CountdownComponent } from './countdown/countdown.component';
import { MerchComponent } from './merch/merch.component';
import { PrizesComponent } from './prizes/prizes.component';
import { HotelsComponent } from './hotels/hotels.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    EventInfoComponent,
    MeetInfoComponent,
    CountdownComponent,
    MerchComponent,
    PrizesComponent,
    HotelsComponent,
    SponsorsComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
