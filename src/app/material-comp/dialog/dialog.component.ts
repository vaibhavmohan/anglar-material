import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from 'src/app/dialog-example/dialog-example.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    let dialogRef = this.dialog.open(DialogExampleComponent,{data:{name:'vaibhav'}});
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(`Dialog result: ${result}`);
      } 
    );
  }
}
