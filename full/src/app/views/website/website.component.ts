import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AppLoaderService } from '../../shared/services/app-loader/app-loader.service';
import {FormGroup, FormControl, Validators}  from '@angular/forms';
// import { stringify } from '@angular/core/src/render3/util';
//import {stringify} from '@angular/core/src/r3_symbols'
import { variable } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'website',
  templateUrl: './website.component.html',
})
export class WebsiteComponent  {
  date; //date Variable
  logedInForm; //These are variables
  emailId;
  password;
  display='none'; //default Variable
    constructor(
        private router: Router,
        private loader: AppLoaderService
      ) { }

    ngOnInit() {
        
      this.date = new Date(); // Today date and time
      //Login Validation
      this.logedInForm = new FormGroup({
        emailId: new FormControl("youremail@gmail.com",
          Validators.compose([
            Validators.required,
            Validators.pattern("[^ @]*@[^ @]*")
        ])),
        password: new FormControl('YourPassword', [
             Validators.minLength(8),
             Validators.required])
      });
      }
      mdfLogin(data) {
        this.emailId = data.emailId;
        this.password = data.password;
       // alert(JSON.stringify(data));
      }
    
      closeModalDialog(){
        this.display='none'; //Set block css
     }
    
     loginPopup(){
       
       this.display='block'; //set none css after close dialog
     }
      goToMainDash() {
        this.loader.open();
        this.router.navigateByUrl('/dashboard');
      
      }
      ngOnDestroy() {
        // if (this.homePS) this.homePS.destroy();
        this.loader.close();
      }

      SignupPopup()
      {
        alert('a');
      }

     
}