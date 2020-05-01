import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dialog-order',
  templateUrl: './dialog-order.component.html',
  styleUrls: ['./dialog-order.component.scss']
})
export class DialogOrderComponent implements OnInit {
  ApiUrl: any='http://192.168.0.101:5000/';
  url : any = this.ApiUrl+ 'dispatcher';
  data: any;
  dispatcher: any;
  dispatcherList: any=[];
  @Input() public test;
  constructor(public httpClient: HttpClient) { }

  ngOnInit() {

    this. getDispatchers();
  }
  getDispatchers(){
    this.data = this.httpClient.get(this.url);
    this.data.subscribe(data =>{
      this.dispatcherList = data.dispatchers;

    })
  }
}
