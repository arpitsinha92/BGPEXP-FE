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
import { FormGroup, FormControl, Validators, FormArray, FormBuilder, FormsModule } from '@angular/forms';
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

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  url: any='http://192.168.0.7:5000/';
  showdiv: any;
  deletetitle : any = 'Delete Dispatcher';
  deletetext : any = 'Are you sure do you really want to delete this Dispatcher?';
  buttonFunction: string = "Save";
  showtable : any;
  showformdiv : any;
  selectedOption : any;
  nameSprinter : string;
  DispatchersList : any;
  emailID : string;
  mobile : string;
  address : string;
  data: any;
  id: any;
  msg: string;
  drivingLicence : string;
  pancard : string;
  dispID: any;
  aadharcard : string;
  selectedFilesprinter: File = null;
  selectedFilespancard: File = null;
  selectedFilesaadharcard : File = null;
  selectedFileLicense : File = null;
  constructor(public httpClient: HttpClient,public confirmService: AppConfirmService) {
  }
  ngOnInit() {
this.showdiv = true;
this.showtable = true;
this.showformdiv = false;
this.getallDispatchers();

  }


  addSprinter() {
    this.showdiv = false;
    this.showtable = false;
    this.showformdiv = true;
   //this.sidemodalservice.open();
  }

  onfileSelectorlicense(event)
  {
    this.selectedFileLicense = <File>event.target.files[0];
  }
  onfileSelectorsprinter(event)
  {
    this.selectedFilesprinter = <File>event.target.files[0];
  }
  onfileSelectorpancard(event)
  {
    this.selectedFilespancard = <File>event.target.files[0];
  }
  onfileSelectoraadharcard(event)
  {
    this.selectedFilesaadharcard = <File>event.target.files[0];
  }

  clearFields(){
    this.showdiv = true;
    this.showtable = true;
    this.showformdiv = false;
    this.nameSprinter = "";
    this.emailID = "";
    this.mobile = "";
    this.address = "";
    this.drivingLicence = "";
    this.pancard = "";
    this.aadharcard = "";
  }

  saveSprinter()
  {
if(this.buttonFunction == "Update")
{

}
else{


      const fd = new FormData();
      fd.append('image', this.selectedFilesprinter);
      fd.append('pan_image', this.selectedFilespancard);
      fd.append('aadhar_image', this.selectedFilesaadharcard);
      fd.append('license_image', this.selectedFileLicense);
      fd.append('name', this.nameSprinter);
      fd.append("mobile" , this.mobile);
      fd.append('address', this.address);
      fd.append('driving_license', this.drivingLicence);
      fd.append('pan_number', this.pancard);
      fd.append("aadhar_number",this.aadharcard);


      this.data = this.httpClient.post(this.url+"dispatcher", fd);

      this.data.subscribe(data =>{
       this.msg = data.message;

       if(this.msg == 'Dispatcher created successfully')
       {

             alert(this.msg);
             this.clearFields();
             this.getallDispatchers();

           }
           else
           {
             alert("Something went wrong!");
           }
          });
        }
    }





  getallDispatchers()
  {
    this.data = this.httpClient.get(this.url+"dispatcher");
    this.data.subscribe(data =>{
      this.DispatchersList = data.dispatchers;

    });
  }

  editDispatcher(row)
  {
    this.showdiv = false;
    this.showtable = false;
    this.showformdiv = true;

    this.id= row._id;
    this.buttonFunction = 'Update';
    this.nameSprinter = row.name;
    this.mobile = row.mobile;
    this.address = row.address;
    this.drivingLicence = row.driving_license;
    this.pancard = row.pan_number;
    this.aadharcard = row.aadhar_number;
  }



  deletedispatcher(row)
  {
    this.confirmService.confirm({title: this.deletetitle, message: this.deletetext})
    .subscribe((result) => {
      this.selectedOption = result;
     // alert( this.selectedOption); row.LeadID

     if(this.selectedOption)
     {
      let ldID : any =row._id;


      this.data = this.httpClient.delete(this.url+"/"+ldID);
      this.data.subscribe(data =>{
        this.msg = data.message;
        if(this.msg == 'Deleted')
        {
          //alert(this.msg);
          this. getallDispatchers();
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
}
