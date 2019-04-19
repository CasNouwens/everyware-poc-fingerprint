import { Injectable } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { debuglog } from 'util';

@Injectable({
  providedIn: 'root'
})
export class FingerprintService {

  constructor(private faio: FingerprintAIO) { }

  public checkAvailable() {
    this.faio.isAvailable()
      .then(result => {
        alert('Fingerprint available');
        console.log(result);
      })
      .catch(error => {
        alert('Fingerprint authentication not configured');
        console.log(error);
      });
  }

  public tryAuth() {
    this.faio.show({
      clientId: 'Fingerprint-Demo',
      clientSecret: Math.random() + '', // Only necessary for Android
      disableBackup: true,  // Only for Android(optional)
      localizedFallbackTitle: 'Use Pin', // Only for iOS
      localizedReason: 'Please authenticate' // Only for iOS
    })
      .then((result: any) => {
        // Get JWT token from local storage and send authentication request to Lumen API with that token.
        alert('Validation done');
        return console.log(result);
      })
      .catch((error: any) => {
        alert('Validation done');
        return console.log(error);
      });

  }
}
