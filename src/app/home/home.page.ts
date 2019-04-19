import { Component } from '@angular/core';
import { FingerprintService } from '../services/fingerprint.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private fingerPrintService: FingerprintService) { }

  private checkAvailable() {
    this.fingerPrintService.checkAvailable();
  }

  private fingerLogin() {
    this.fingerPrintService.tryAuth();
  }
}
