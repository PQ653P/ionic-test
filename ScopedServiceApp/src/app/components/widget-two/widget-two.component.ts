import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyScopedService } from '../../services/my-scoped-service.service';
import { Subscription } from 'rxjs';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-widget-two',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './widget-two.component.html',
  styleUrls: ['./widget-two.component.scss'],
})
export class WidgetTwoComponent  implements OnInit, OnDestroy {
  randomValue: number = 0;
  private subscription!: Subscription;
  animate = false;

  constructor(private myScopedService: MyScopedService) { }

  ngOnInit() {
    this.subscription = this.myScopedService.randomNumberObservable$.subscribe(
      (value) => {
        this.randomValue = value;
        this.triggerAnimation();
      }
    );
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  triggerAnimation() {
    this.animate = true;
    setTimeout(() => (this.animate = false), 300);
  }
}
