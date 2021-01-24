import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class AlertService {

  constructor(
    private _snackBar: MatSnackBar
  ) { }
  openSnackBar(message: string) {
    this._snackBar.open(message,"X", {
      duration: 2000,
      horizontalPosition: "end",
      verticalPosition: "top",
    });
  }
}