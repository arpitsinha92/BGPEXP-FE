import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  activeView : string = 'overview';
  customername: any = "Arpit Sinha";
  customeraddress: any = "Q no 26 Abc, club Road East colony jamalpur";
public imageurl : any;
data: any;
DispatchersList: any;
url: any='http://192.168.0.105:5000/';
showtable: boolean;
showlistTable: boolean = false;
showList: boolean = false;


  constructor(private router: ActivatedRoute, public httpClient: HttpClient) { }

  ngOnInit() {
    this.showtable = true;
   //this.getallDispatchers();
    this.imageurl = ["https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg", "https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg", "https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"]
    this.activeView = this.router.snapshot.params['view']
  }
  getallDispatchers()
  {
    this.data = this.httpClient.get(this.url+"dispatcher");
    this.data.subscribe(data =>{
      console.log(data);
      this.DispatchersList = data.dispatchers;

    });
  }

  editDispatcher()
  {
    this.showtable = false;
    this.showList = true;
    this.showlistTable = true;
  }
}
