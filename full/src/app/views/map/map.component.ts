import { Component, OnInit } from '@angular/core';
import { egretAnimations } from "../../shared/animations/egret-animations";
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";
import {SelectionModel} from '@angular/cdk/collections';
import { Router } from '@angular/router'
import { AppLoaderService } from '../../shared/services/app-loader/app-loader.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import {getMatFormFieldMissingControlError} from '@angular/material/form-field';
import {MatDialog} from '@angular/material/dialog';
import * as hopscotch from 'hopscotch';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { startWith, map } from 'rxjs/operators';
import {VERSION} from '@angular/material/core';

import { DialogOrderComponent } from '../../views/dialog-order/dialog-order.component';

import {Pipe, PipeTransform} from '@angular/core';
// import {DateFormatter} from 'angular2/src/facade/intl';
///import { TablesService } from '../tables.service';

import { AppConfirmService } from '../../shared/services/app-confirm/app-confirm.service';
import { DatePipe } from '@angular/common';
import { empty } from 'rxjs';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  ApiUrl: any='http://192.168.0.105:5000/';
  url : any = this.ApiUrl+ 'order';
  data: any;
  row: any;
  OrderList: any;
  dataSource = new MatTableDataSource;
  selection = new SelectionModel;
  dispatcherList: any;
  dispatcher: any;
  rows= [];
  selected = []
selectedID: any[] = [];
dispatcherID: any;

  constructor(public httpClient: HttpClient, public confirmService: AppConfirmService, public dialog: MatDialog) { }

  ngOnInit() {

    this.getAllOrder();
    this.getDispatcher();
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
     numSelected === numRows;
     return numSelected;

  }
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));

  }
  onSelect(row)
  {
    this.selectedID =[]
    for(let i=0;i<row.selected.length;i++)
    {
      this.selectedID.push(row.selected[i]._id);
    }

  }
    checkboxLabel() {

   return `${this.selection.isSelected(this.row) ? 'deselect' : 'select'} row ${this.row.position + 1}`;
  }

  openDialog()
  {
    this.dialog.open(DialogOrderComponent);
  }

  getDispatcher()
  {
    this.data = this.httpClient.get(this.ApiUrl + "dispatcher");
    this.data.subscribe(data =>{
      this.dispatcherList = data.dispatchers;
    })
  }

  mssg: string;
  assignorders()
  {


    var dataJson = {
      dispatcher_id: this.dispatcherID,
      orders: this.selectedID
       };

       this.data = this.httpClient.post(this.ApiUrl+ "trip/createTrip", dataJson);

       this.data.subscribe(data =>{

        this.mssg = data.message;

        alert(this.mssg);

        this.getAllOrder();
       });


  }

 getAllOrder()
 {
   
  this.data = this.httpClient.get(this.ApiUrl + "order");
  this.data.subscribe(data =>{
    this.OrderList = data.orders;
    
    this.rows = data.orders;
  })
 }
 id : any;
 msg : any;
 updatePayment(row)
 {
this.id = row._id;

  this.data = this.httpClient.put(this.url+"/"+this.id, null);
  this.data.subscribe(data =>{
    this.msg = data.message;

    if(this.msg == 'Order Updated')
    {
   alert(this.msg);
   this.getAllOrder();
    }

    else
    {
      alert('Something went wrong!')
    }

 });
}


customersOrderList: any;
orderDetails(row)
{
  this.id = row._id;

  this.data = this.httpClient.get(this.url +"/"+this.id);
  this.data.subscribe(data =>{
    this.customersOrderList = data.orders;

  });
}
}
