import { identifierName } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cruddialog',
  templateUrl: './cruddialog.component.html',
  styleUrls: ['./cruddialog.component.scss']
})
export class CruddialogComponent implements OnInit {
  actionBtn:string = 'Save';
  productForm !: FormGroup;
  freshnessList = ["Brand New","Second Hand","Refurbished"];
  constructor(
      private formBuilder:FormBuilder, 
      private api:ApiService, 
      @Inject(MAT_DIALOG_DATA) public editData: any,
      private dialogRef: MatDialogRef<CruddialogComponent>) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
        productName: ['',Validators.required],
        category: ['',Validators.required],
        freshness: ['',Validators.required],
        price: ['',Validators.required],
        comment: ['',Validators.required],
        date: ['',Validators.required]
    });
    if(this.editData){
      this.productForm.patchValue(this.editData);
      this.actionBtn = 'Update';
    }
  }

  addProduct(){
    if(!this.editData){
      if(this.productForm.valid){
        this.api.postProduct(this.productForm.value).subscribe({
          next: (res) => {
            alert("product added successfully");
            this.productForm.reset();
            this.dialogRef.close();
          },
          error: () => {
            alert("Something went wrong");
          }
        })
      }
    }else{
      this.updateProduct();
    }
  }

  updateProduct(){
      const {id} = this.editData;
      if(this.productForm.valid){
        this.api.putProduct(this.productForm.value,id).subscribe({
          next: (res) => {
            alert("product added successfully");
            this.productForm.reset();
            this.dialogRef.close();
          },
          error: (err) => {
            console.log("Something went wrong",err);            
          }
        })
      }
  }

  
}
