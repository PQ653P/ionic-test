import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyScopedService } from 'src/app/services/my-scoped-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-widget-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-one.component.html',
  styleUrls: ['./widget-one.component.scss'],
})
export class WidgetOneComponent  implements OnInit, OnDestroy {
  counterValue: number = 0;
  private subscription!: Subscription;

  constructor(private myScopedService: MyScopedService) {}

  ngOnInit() {
    //console.log("WidgetOne feliratkozás!");
    this.subscription = this.myScopedService.counterObservable$.subscribe(
      (value) => {
        this.counterValue = value;
        //console.log("WidgetOne kapott új értéket:", value);
      }
    );
  }

  ngOnDestroy() {
    console.log("WidgetOne leiratkozás!");
    this.subscription.unsubscribe();
  }
}
