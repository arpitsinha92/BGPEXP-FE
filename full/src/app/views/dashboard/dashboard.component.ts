import { Component, OnInit } from '@angular/core';
import { egretAnimations } from "../../shared/animations/egret-animations";
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";
// import * as jsPDF from 'jspdf';

import { Router } from '@angular/router'
import { AppLoaderService } from '../../shared/services/app-loader/app-loader.service';

import { MatSnackBar, getMatFormFieldMissingControlError } from '@angular/material';

import * as hopscotch from 'hopscotch';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { startWith, map } from 'rxjs/operators';
import {VERSION} from '@angular/material';


import {Pipe, PipeTransform} from '@angular/core';
// import {DateFormatter} from 'angular2/src/facade/intl';
///import { TablesService } from '../tables.service';

import { AppConfirmService } from '../../shared/services/app-confirm/app-confirm.service';
import { DatePipe } from '@angular/common';
import { empty } from 'rxjs';


export interface Requirement {
  Reqvalue: any;
  ReqviewValue: string;
}
export interface assign {
  assignvalue: any;
  assignviewValue: string;
}


export interface source {
  Sourcevalue: any;
  SourceviewValue: string;
}

export interface status {
  statusvalue: any;
  StatusviewValue: string;
}

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  animations: egretAnimations
})
export class DashboardComponent implements OnInit {
  ApiUrl: any='http://192.168.0.101:5000/';
  url : any = this.ApiUrl+ 'product';
  urlCat : any = this.ApiUrl+ 'category';
  selectedFile: File = null;
  onfileSelector(event)
  {
    this.selectedFile = <File>event.target.files[0];
  }
  ProductForm : any;
  Productname: any;
  Category: any;
  HindiProductname: any;
  data : any;
  addForm: FormGroup;
  ProductList : any;
  rows: FormArray;
  itemForm: FormGroup;
  showbutton: any;
  BtnName: any;
  summaries : any;
  descriptionImage : any;
  accesstoken: any;
  constructor(private fb: FormBuilder, public httpClient: HttpClient, public confirmService: AppConfirmService) {

    this.addForm = this.fb.group({
      items: [null, Validators.required],
      items_value: ['no', Validators.required]
    });

    this.rows = this.fb.array([]);

  }

  ngOnInit()
  {
this.BtnName = "Save";
    this.addForm.get("items").valueChanges.subscribe(val => {
      if (val === true) {
        this.addForm.get("items_value").setValue("yes");

        this.addForm.addControl('rows', this.rows);
      }
      if (val === false) {
        this.addForm.get("items_value").setValue("no");
        this.addForm.removeControl('rows');
      }
    });
    this.ProductForm = false;
    this.showbutton = true;

this.getAllProduct();
    this.getAllCategory();

  }

  showProductFrom()
  {
    this.ProductForm = true;
    this.clearProductFields();
    this.showbutton = false;
  }

  clearProductFields()
  {
    this.Productname = "";
    this.Category = "";
    this.HindiProductname = "";
  }

  onAddRow() {
    this.rows.push(this.createItemFormGroup());
  }

  onRemoveRow(rowIndex:number){
    this.rows.removeAt(rowIndex);
  }

  createItemFormGroup(): FormGroup {

    return this.fb.group({
      quantity: null,
      unit: null,
      price: null
    });


  }

  hideProductForm()
  {
    this.ProductForm = false;
    this.clearProductFields();
    this.showbutton = true;
  }

  clearFields()
  {

    this.Productname = "";
    this.Category = "";
    this.HindiProductname = "";
    this.ProductForm = false;
    this.showbutton = true;
    this.getAllProduct();
  }

  getAllProduct()
  {
    this.data = this.httpClient.get(this.url);
    this.data.subscribe(data =>{
      this.ProductList = data.products;
    ;
    })
  }


  getAllCategory() {
    this.data = this.httpClient.get(this.urlCat);
   this.data.subscribe(data =>{
     this.summaries = data.category;
   ;
   })
     }



  msg : any;
  prodID: any;
  saveProduct()
  {
    if(this.BtnName == 'Update')
    {

      const fd  = new FormData();
      fd.append('image', this.selectedFile);
      var dataJson = {

        name : this.Productname,
        category_id : this.Category,
        hindi_name : this.HindiProductname,
        quantity : this.rows.value
      }

   this.data = this.httpClient.put(this.url+"/"+this.ProductId, dataJson);

   this.data.subscribe(data =>{
    this.msg = data.message;

    if(this.msg == 'Product created')
    {
      this.prodID = data.product_id;
      this.data = this.httpClient.post(this.url + '/imageUpload/'+ this.prodID, fd);

      this.data.subscribe(data =>{
        this.msg = data.message;
        if(this.msg == "Image Uploaded Successfully")
        {
          alert("Product Created Successfully");
          this.clearFields();
          this.getAllProduct();

        }
      });

    }
    else
    {
      alert('Something went wrong!')
    }
   });
    }
    else
    {
    const fd  = new FormData();
    fd.append('image', this.selectedFile);
    var dataJson = {
      name : this.Productname,
      category_id : this.Category,
      hindi_name : this.HindiProductname,
      quantity : this.rows.value,
      accesstoken : this.accesstoken
    }

 this.data = this.httpClient.post(this.url,dataJson);

 this.data.subscribe(data =>{
  this.msg = data.message;

  if(this.msg == 'Product created')
  {
    this.prodID = data.product_id;
    this.data = this.httpClient.post(this.url + '/imageUpload/'+ this.prodID, fd);

    this.data.subscribe(data =>{
      this.msg = data.message;
      if(this.msg == "Image Uploaded Successfully")
      {
        alert("Product Created Successfully");
        this.clearFields();
        this.getAllProduct();

      }
    });

  }
  else
  {
    alert('Something went wrong!')
  }
 });
}
  }

  ProductId : any;

  editProduct(row)
  {

    this.ProductForm = true;
    this.clearProductFields();
    this.showbutton = false;
    this.ProductId= row._id;
    this.BtnName = 'Update';
     this.Productname = row.name;
    this.Category = row.category_id;
    this.HindiProductname = row.hindi_name;

  }

  deletetitle : any = 'Delete Product';
  deletetext : any = 'Are you sure do you realy want to delete this Product?';
  selectedOption : any;
  deleteProduct(row)
  {
    this.accesstoken = localStorage.getItem("tokenalue");
    this.confirmService.confirm({title: this.deletetitle, message: this.deletetext})
    .subscribe((result) => {
      this.selectedOption = result;
     // alert( this.selectedOption); row.LeadID

     if(this.selectedOption)
     {
      let ldID : any =row._id;


      this.data = this.httpClient.delete(this.url+"/"+ldID, this.accesstoken);
      this.data.subscribe(data =>{
        this.msg = data.message;
        if(this.msg == 'Deleted')
        {
          alert("Deleted Successfully");
          this.getAllProduct();
        }
        else
        {
          alert('Something went wrong!')
        }
        });
      }
      else
      {

      }
    });
  }

  descriptionProductName : any;
  descriptionCategoryName : any;
  ProductDescription : any;
  descriptionProductHindiName : any;
  ProductDescriptionList: any;
  productDetails(row)
  {
    this.ProductDescription = true;
    this.showbutton = false;

    this.descriptionProductName = row.name;
    this.descriptionCategoryName = row.category_id.name;
    this.descriptionProductHindiName = row.hindi_name;
    this.ProductDescriptionList = row.quantity;
    console.log(this.ProductDescriptionList);
  }

  backtoProductmainScreen ()
  {
    this.ProductDescription = false;
    this.showbutton = true;
  }


}
