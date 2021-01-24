import { Component } from '@angular/core'
import { Observable, Observer, fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-network-connection',
  templateUrl: './network-connection.component.html',
  styleUrls: ['./network-connection.component.css'],
  providers: [
    AlertService
  ]
})
export class NetworkConnectionComponent {

    constructor(
      private alertService: AlertService
    ) { 
      this.createOnline$().subscribe(isOnline => {
        const status = isOnline? "Online": "offline"
        this.alertService.openSnackBar(`You are ${status}`)
      });
    }
    createOnline$() {
      return merge<boolean>(
        fromEvent(window, 'offline').pipe(map(() => false)),
        fromEvent(window, 'online').pipe(map(() => true)),
        new Observable((sub: Observer<boolean>) => {
          sub.next(navigator.onLine);
          sub.complete();
        }));
    }
}