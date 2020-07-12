import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-mat-icons',
  templateUrl: './mat-icons.component.html',
  styleUrls: ['./mat-icons.component.css']
})
export class MatIconsComponent implements OnInit {

  data: any;
  ApiUrl: any='http://192.168.0.107:5000/';
  url : any = this.ApiUrl+ 'trip';
  tripList: any;
  constructor(public httpClient: HttpClient) { }

  ngOnInit() { 
    this.getAllTripDetails();
  }

  getAllTripDetails()
  {
    this.data = this.httpClient.get(this.url);
    this.data.subscribe(data =>{
      this.tripList = data.products;
    ;
    })
  }
}