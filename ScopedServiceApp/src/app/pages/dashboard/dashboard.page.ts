import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MyScopedService } from '../../services/my-scoped-service.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  providers: [MyScopedService]
})
export class DashboardPage {

  counterValue: number = 0;

  constructor(private myScopedService: MyScopedService) {}

  increment() {
    this.myScopedService.incrementCounter();
    this.counterValue = this.myScopedService.getCounter();
  }
}

