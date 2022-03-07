import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.scss']
})
export class SnackComponent implements OnInit {

  constructor(private snackbar:MatSnackBar ) { }

  ngOnInit(): void {
  }

  openSnackBar(message:string, action:string){
    let snackBarRef = this.snackbar.open(message, action, {duration:1000});

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('The snackbar was dismissed');
    });

    snackBarRef.onAction().subscribe(() => {
      console.log('The snackbar action was triggered');
    });
  }

  openCustomSnackBar(){
    this.snackbar.openFromComponent(CustomSnackBarComponent,{duration: 2000});
  }

}


@Component({
  selector: 'custom-snackbar',
  template: `<span style='color: orange'>Custom Snackbar</span>`,
})
export class CustomSnackBarComponent {

}