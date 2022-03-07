import { Component, OnInit, AfterViewInit,  ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CruddialogComponent } from '../cruddialog/cruddialog.component';
import { ApiService } from 'src/app/services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-crudlist',
  templateUrl: './crudlist.component.html',
  styleUrls: ['./crudlist.component.scss']
})

export class CrudlistComponent implements OnInit {
  displayedColumns: string[] = ['productName','category','freshness','price','comment','date','action'];
  dataSource: MatTableDataSource<productData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private api: ApiService) { }

  ngOnInit(): void {
    let products = this.getAllProducts()
  }

  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(CruddialogComponent,{
      width:"30%",
      maxHeight: '80vh' 
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllProducts();
      console.log(`Dialog result: ${result}`);
    });
  }

  getAllProducts(){
    this.api.getProduct()
            .subscribe({
              next: (res)=> {
                this.dataSource = new MatTableDataSource(res);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
              },
              error: (err) => {
                console.log("Something went wrong",err);
                
              }
            });

  }

  editProduct(row){
    this.dialog.open(CruddialogComponent,{
      width:"30%",
      maxHeight: '80vh',
      data: row
    }).afterClosed().subscribe(val => {
      this.getAllProducts()
    });
  }

  deleteProduct(id){
      this.api.deleteProduct(id).subscribe({
        next: (res) => {
          this.getAllProducts()
        },
        error: (err) => {
          console.log("Something went wrong",err);            
        }
      })
    
  }

}

export interface productData {
  productName: string;
  category: string;
  freshness: string;
  price: number;
  comment: string;
  date: object;
}