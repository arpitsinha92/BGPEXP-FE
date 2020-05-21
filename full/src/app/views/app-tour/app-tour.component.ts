import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar,  MatCheckboxModule } from '@angular/material';
import * as hopscotch from 'hopscotch';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";
// import { TablesService } from '../tables.service';
import { TablesService } from '../tables/tables.service';
import { AppConfirmService } from '../../shared/services/app-confirm/app-confirm.service';
import { DatePipe } from '@angular/common';
import * as Myglobals from '../../views/home/home.component';



export interface Type {
  Typevalue: any;
  TypeviewValue: string;
}

export interface DiscType {
  DiscTypevalue: any;
  DiscTypeviewValue: string;
}
//ApiUrl

export interface Category {
  Categoryvalue: any;
  CategoryviewValue: string;
}
@Component({
  selector: 'app-app-tour',
  templateUrl: './app-tour.component.html',
  styleUrls: ['./app-tour.component.css']
})



export class AppTourComponent implements OnInit, OnDestroy {

  ApiUrl: any='http://192.168.0.101:5000/';
  url : any = this.ApiUrl+ 'category';
  category: string;
selectedFile: File = null;
image : any;
columns : any;
CategoryList : any;
data : any;

 msg : any;
 BtnName : any;
 CategoryId : any;
 deletetitle : any = 'Delete Category';
 deletetext : any = 'Are you sure do you realy want to delete this Category?';
 selectedOption : any;
  onfileSelector(event)
  {
    this.selectedFile = <File>event.target.files[0];
  }
  constructor(public snackBar: MatSnackBar,   public httpClient: HttpClient,  public confirmService: AppConfirmService,
    private datePipe: DatePipe, public matCheckboxModule : MatCheckboxModule ) { }

  ngOnInit() {
this.BtnName = 'Save';
   // this.time = this.datePipe.transform(new Date(), 'dd/MM/yyyy');


   this.getAllCategory();

  // this.columns = this.getDataConf();

  }

  saveCategory()
  {
    if( this.BtnName == 'Update')
    {
   const fd  = new FormData();
   fd.append('image', this.selectedFile);
   fd.append('name',this.category);

this.data = this.httpClient.put(this.url+"/"+this.CategoryId, fd);
this.data.subscribe(data =>{
this.msg = data.message;
if(this.msg == 'Updated')
{
  alert(this.msg);
  this.getAllCategory();
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
   fd.append('name',this.category);

this.data = this.httpClient.post(this.url,fd);
this.data.subscribe(data =>{
this.msg = data.message;
if(this.msg == 'Category created')
{
  alert(this.msg);
  this.getAllCategory();
}
else
{
  alert('Something went wrong!')
}
});
}
  }

  clearFields()
  {
    this.category = "";
    this.image = "";
  }

  getAllCategory() {

 this.data = this.httpClient.get(this.url);
this.data.subscribe(data =>{
  this.CategoryList = data.category;
;
})
  }

  editCategory(row){
   this.CategoryId= row._id;
   this.BtnName = 'Update';
   this.category = row.name;
  }


  deleteCategory(row) {
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
            alert(this.msg);
            this.getAllCategory();
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


  ngOnDestroy() {
    hopscotch.endTour(true);
  }

}
