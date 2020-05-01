import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { AppLoaderService } from '../../shared/services/app-loader/app-loader.service';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";
import { MatProgressBar, MatButton } from '@angular/material';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material';

import { HttpClientModule } from '@angular/common/http';
// import PerfectScrollbar from 'perfect-scrollbar';
//export const ApiUrl='http://192.168.0.8:5000/';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

  // styleUrls: ['./signin.component.css']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
   @ViewChild(MatProgressBar) progressBar: MatProgressBar;
   @ViewChild(MatButton) submitButton: MatButton;
  signinForm: FormGroup;
  /****** Only for demo) **********/
//apiUrl:any="http://192.168.2.27:99";
  username: string;
  ApiUrl: string ='http://192.168.0.7:5000/webUser/login';
  password: string;
  data: any;
  msg: any;
  token: string;
  warningmsg: string;
  authenticateMsg: string;
  public versions: any[] = [
    {
      name: 'Side Navigation',
      photo: 'assets/images/screenshots/side-simple-ltr.png',
      dest: 'dashboard',
      conf: `{
        "navigationPos": "side",
        "sidebarStyle": "full",
        "dir": "ltr",
        "useBreadcrumb": true,
        "topbarFixed": false,
        "breadcrumb": "simple"
      }`
    }, {
      name: 'Top Navigation',
      photo: 'assets/images/screenshots/top-simple-ltr.png',
      dest: 'shop',
      conf: `{
        "navigationPos": "top",
        "sidebarStyle": "full",
        "dir": "ltr",
        "useBreadcrumb": true,
        "topbarFixed": false,
        "breadcrumb": "simple"
      }`
    },
    {
      name: 'RTL (Side Nav)',
      photo: 'assets/images/screenshots/side-simple-rtl.png',
      dest: 'profile/settings',
      conf: `{
        "navigationPos": "side",
        "sidebarStyle": "full",
        "dir": "rtl",
        "useBreadcrumb": true,
        "topbarFixed": false,
        "breadcrumb": "simple"
      }`
    },
    {
      name: 'RTL (Top Nav)',
      photo: 'assets/images/screenshots/top-simple-rtl.png',
      dest: 'profile/settings',
      conf: `{
        "navigationPos": "top",
        "sidebarStyle": "full",
        "dir": "rtl",
        "useBreadcrumb": true,
        "topbarFixed": false,
        "breadcrumb": "simple"
      }`
    },
    {
      name: 'Dark Purple',
      photo: 'assets/images/screenshots/dark-purple-title.png',
      dest: 'dashboard',
      conf: `{
        "navigationPos": "side",
        "sidebarStyle": "full",
        "dir": "ltr",
        "useBreadcrumb": true,
        "topbarFixed": true,
        "breadcrumb": "simple"
      }`,
      theme: `{
        "name": "egret-dark-purple"
      }`
    },
    {
      name: 'Dark Pink',
      photo: 'assets/images/screenshots/dark-pink-title.png',
      dest: 'dashboard',
      conf: `{
        "navigationPos": "side",
        "sidebarStyle": "full",
        "dir": "ltr",
        "useBreadcrumb": true,
        "topbarFixed": true,
        "breadcrumb": "simple"
      }`,
      theme: `{
        "name": "egret-dark-pink"
      }`
    },
    {
      name: 'Light Blue',
      photo: 'assets/images/screenshots/light-blue-title.png',
      dest: 'dashboard',
      conf: `{
        "navigationPos": "side",
        "sidebarStyle": "full",
        "dir": "ltr",
        "useBreadcrumb": true,
        "topbarFixed": true,
        "breadcrumb": "simple"
      }`,
      theme: `{
        "name": "egret-blue"
      }`
    }
  ]

  // private homePS: PerfectScrollbar;
  constructor(
    private router: Router,
    private loader: AppLoaderService,
    public httpClient: HttpClient
  ) {
    this.httpClient = httpClient;
   }

  ngOnInit()
  {
    this.signinForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl(false)
    })
  }

  signin() {
    const signinData = this.signinForm.value
    console.log(signinData);

    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';
  }

  ngOnDestroy() {
    // if (this.homePS) this.homePS.destroy();
    this.loader.close();
  }
  ngAfterViewInit() {

  }



  // login(){

  //   this.httpClient.post(this.apiUrl+'/getAuthendicateUserForCheck',{
  //     StrUsrName:this.username,
	// 	  StrPassword: this.password
  //   })
	//   .subscribe( res => {
  //     this.authenticateMsg = res.toString();
  //     alert(this.authenticateMsg);

  //     if(this.authenticateMsg == "Logged in successfully")
  //     {
  //       this.router.navigateByUrl('/dashboard');
  //     }
  //     else
  //     {
  //       this.warningmsg = "Credential is wrong!!";
  //     }
	//   });
  // }

  login()
{



  // let url = ApiUrl+'/getAuthendicateUserForCheck';
  //let params = {
  //   StrUsrName:this.username,
  //   StrPassword: this.password

  // }
  // this.httpClient.post(url, null, { params: params }).toPromise().then(
  //   success => {
  //     var data = success;
  //     if(data == "Logged in successfully")
  //     {
  //       this.router.navigateByUrl('/dashboard');
  //     }
  //     else
  //     {
  //       alert('Credential is Wrong!!');
  //       this.username = "";
  //       this.password = "";
  //       this.signinForm.reset();
  //       this.router.navigateByUrl('/home');
  //     }

  //   },
  //   error => {
  //     console.log(error);
  //   }
  // );
}

tokenx: any;
authenticateUser()
{
  // this.tokenx = "abc";
  // localStorage.setItem("tokenalue",this.tokenx);
  // this.router.navigateByUrl('/Products');
    let params = {
        email:this.username,
        password: this.password
      }

      this.data = this.httpClient.post(this.ApiUrl, params);
this.data.subscribe(data =>{
this.msg = data.message;
this.token = data.token;
localStorage.setItem("tokenvalue",this.token);
if(this.msg == "Login Successful")
{
  this.router.navigateByUrl('/Products');
}
});
}



}
