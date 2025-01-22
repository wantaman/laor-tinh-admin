
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core'; 
@Injectable({
  providedIn: 'root'
})
export class NGXToastrService {
    error: any;
    constructor(public toastr: ToastrService) { }

    // Success Type
    typeSuccess(kh_msg:string, en_msg:string) {

        if (localStorage.getItem('lang')) {
            if(localStorage.getItem('lang') == 'kh'){
                this.toastr.success(kh_msg);
            }else{
                this.toastr.success(en_msg);
            }
          } else {
            this.toastr.success(en_msg);
        }
        
    }

    typeSuccessEditPassword(){ 
        if (localStorage.getItem('lang') ) {
            if( localStorage.getItem('lang') == 'kh'){
                this.toastr.success("ការផ្លាស់ប្តូរពាក្យសម្ងាត់បានជោគជ័យ!");
            }else{
                this.toastr.success("Change Password Success!");
            }
          } else {
            this.toastr.success("Change Password Success!");
        }
    }

    typeErrorEditPassword(){ 
        if (localStorage.getItem('lang') ) {
            if( localStorage.getItem('lang') == 'kh'){
                this.toastr.error("ការ​ផ្លាស់​ប្តូ​រ​ពាក្យ​សម្ងាត់​បាន​បរាជ័យ​!");
            }else{
                this.toastr.error("Change Password Fail!");
            }
          } else {
            this.toastr.error("Change Password Fail!");
        }
    }

    typeErrorOldPassword(){ 
        if (localStorage.getItem('lang') ) {
            if( localStorage.getItem('lang') == 'kh'){
                this.toastr.error("ពាក្យ​សម្ងាត់​ចាស់​មិន​ត្រឹមត្រូវ!");
            }else{
                this.toastr.error("Old Password is not correct!");
            }
          } else {
            this.toastr.error("Old Password is not correct!");
        }
    }

    typeSuccessEdit(){ 
        if (localStorage.getItem('lang') ) {
            if( localStorage.getItem('lang') == 'kh'){
                this.toastr.success("កែប្រែជោគជ៏យ");
            }else{
                this.toastr.success("Update Success");
            }
          } else {
            this.toastr.success("Update Success");
        }
    }

    typeSuccessSubmit(){ 
        if (localStorage.getItem('lang') ) {
            if( localStorage.getItem('lang') == 'kh'){
                this.toastr.success("ដាក់ស្នើជោគជ៏យ");
            }else{
                this.toastr.success("Submit Success");
            }
          } else {
            this.toastr.success("Submit Success");
        }
    }
    typeSuccessCreate() {
        if (localStorage.getItem('lang') ) {
            if( localStorage.getItem('lang') == 'kh'){
                this.toastr.success("បង្កេីតជោគជ័យ");
            }else{
                this.toastr.success("Create Success");
            }
          } else {
            this.toastr.success("Create Success");
        }
    }
    typeSuccessDelete() {
        if (localStorage.getItem('lang') ) {
            if( localStorage.getItem('lang') == 'kh'){
                this.toastr.success("លុបចោលជោគជ័យ");
            }else{
                this.toastr.success("Delete Success");
            }
          } else {
            this.toastr.success("Delete Success");
        }
    }

    // Success Type
    typeInfo(kh_msg:string, en_msg:string) {
        if (localStorage.getItem('lang') ) {
            if( localStorage.getItem('lang') == 'kh'){
                this.toastr.info(kh_msg);
            }else{
                this.toastr.info(en_msg);
            }
          } else {
            this.toastr.info(en_msg);
        }
    }

    // Success Type
    typeWarning(kh_msg:string, en_msg:string) {
        if (localStorage.getItem('lang') ) {
            if( localStorage.getItem('lang') == 'kh'){
                this.toastr.warning(kh_msg);
            }else{
                this.toastr.warning(en_msg);
            }
          } else {
            this.toastr.warning(en_msg);
        }
    }

    // general success
    typeGenealError() {
        if (localStorage.getItem('lang') ) {
            if( localStorage.getItem('lang') == 'kh'){
                this.toastr.error("មានបញ្ហាកេីតឡេីង");
            }else{
                this.toastr.error("There are some problems");
            }
          } else {
            this.toastr.error("There are some problems");
        }
    }
    // Success Type
    typeError(kh_msg:string, en_msg:string) {
        if (localStorage.getItem('lang') ) {
            if( localStorage.getItem('lang') == 'kh'){
                this.toastr.error(kh_msg);
            }else{
                this.toastr.error(en_msg);
            }
          } else {
            this.toastr.error(en_msg);
        }
    }

    typeErrorEdit() {
        if (localStorage.getItem('lang') ) {
            if( localStorage.getItem('lang') == 'kh'){
                this.toastr.error("កែប្រែបរាជ័យ");
            }else{
                this.toastr.error("Update Fail");
            }
          } else {
            this.toastr.error("Update Fail");
        }
    }
    typeErrorSubmit() {
        if (localStorage.getItem('lang') ) {
            if( localStorage.getItem('lang') == 'kh'){
                this.toastr.error("ដាក់ស្នេីរបរាជ័យ");
            }else{
                this.toastr.error("Submit Fail");
            }
          } else {
            this.toastr.error("Submit Fail");
        }
    }

    typeErrorCreate() {
        if (localStorage.getItem('lang') ) {
            if( localStorage.getItem('lang') == 'kh'){
                this.toastr.error("បង្កេីតបរាជ័យ");
            }else{
                this.toastr.error("Create Fail!");
            }
          } else {
            this.toastr.error("Create Fail!");
        }
    }

    typeErrorDelete() {
        if (localStorage.getItem('lang') ) {
            if( localStorage.getItem('lang') == 'kh'){
                this.toastr.error("លុបចោលបរាជ័យ");
            }else{
                this.toastr.error("Delete Fail");
            }
          } else {
            this.toastr.error("Delete Fail");
        }
    }


}