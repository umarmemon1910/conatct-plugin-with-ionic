import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import '@proteansoftware/capacitor-square';
const { CapacitorSquarePlugin } = Plugins;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contacts = [];

  constructor() {}

  onPayment() {
    CapacitorSquarePlugin.initApp({
      applicationId: 'sq0idp-0Q7DnnJ3Ng46NotNICuqVQ',
    });
    const isInit = CapacitorSquarePlugin.isInitalised();
    console.log(isInit);
    CapacitorSquarePlugin.startTransaction({
      totalAmount: 100,
      currencyCode: 'INR',
    });
  }
}
