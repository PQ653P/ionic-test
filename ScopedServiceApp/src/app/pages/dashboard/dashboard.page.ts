import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MyScopedService } from '../../services/my-scoped-service.service';
import { WidgetOneComponent } from '../../components/widget-one/widget-one.component';
import { WidgetTwoComponent } from '../../components/widget-two/widget-two.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, IonicModule, WidgetOneComponent, WidgetTwoComponent],
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  providers: [MyScopedService] // Scoped service itt van regisztrálva
})
export class DashboardPage{
  constructor(private myScopedService: MyScopedService) {}

  stopWidgets() {
    this.myScopedService.stopWidgets();
  }
}