import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllService } from '@core/service/allApi.service';
import { GeneralFunctionService } from '@core/service/general-function.service';
import { NGXToastrService } from '@core/service/toast.service';
import { CategoryFormComponent } from 'app/pages/category/category-form/category-form.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  type: any;
  importData: any;
  loadingGet = []
  loadingSubmit = false;
  isRefreshTable = false;
  imageUrl: string | null = 'assets/images/no-image.png';
  roleList: any;
  selectedImage: any;

  inputGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl(''),
    gender: new FormControl('', Validators.required),
    roleId: new FormControl(''),
  })

  constructor(
    @Inject(MAT_DIALOG_DATA) public dataDetail: any,
    public allFunction: GeneralFunctionService,
    private allService: AllService,
    private ToastrService: NGXToastrService,
    public dialogRef: MatDialogRef<CategoryFormComponent>,
  ) {
    // get form type and url 
    console.log('tmp data', this.dataDetail)
    this.type = this.dataDetail.type
    if (this.type == 'add') {

    }
    else if (this.type == 'edit') {
      this.importData = this.dataDetail.data
      this.getDataDetail()

      console.log(this.importData.avatar)

      this.getImageUrl(this.importData);
    }
  }

  ngOnInit() {
    this.getRole()
  }

  get f() {
    return this.inputGroup.controls
  }

  getRole(){
    this.allService.getAllData(this.allService.roleUrl).subscribe(
      (data:any) =>{
        this.roleList = data.data
        console.log('data role', this.roleList)
      }
    )
  }

  onImageSelected(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      this.selectedImage = files[0];
      this.getImageUrl({ avatar: this.selectedImage });
    }
  }

  getImageUrl(slideShow: any) {
    if (this.selectedImage) {
      this.imageUrl = URL.createObjectURL(this.selectedImage);
    } else {
      if (slideShow.avatar) {
        this.imageUrl = slideShow.avatar;
      } else {
        this.imageUrl = 'assets/images/no-image.png';
      }
    }
  }

  getDataDetail() {
    this.loadingGet.push()
    this.allService.getDataById(this.allService.userUrl, '/' + this.importData.id).subscribe(
      data => {
        this.importData = data
        this.setDataIntoForm()
        this.loadingGet.pop()
        console.log('data detail', data)
      },
      err => {
        this.loadingGet.pop()
        console.log('err', err)
      }
    );
  }

  setDataIntoForm() {
    this.f.name.setValue(this.importData.data.name)
    this.f.email.setValue(this.importData.data.email)
    this.f.gender.setValue(this.importData.data.gender)
    this.f.roleId.setValue(this.importData.data.role.id)
  }

  createData() {
    if (this.isValid()) {
      this.loading()
      const inputData = new FormData(); 
      inputData.append('name', this.f.name.value || '');
      inputData.append('email', this.f.email.value || '');
      inputData.append('gender', this.f.gender.value || '');
      inputData.append('password', this.f.password.value || '');
      inputData.append('roleId', this.f.roleId.value || '');

      console.log('json data', inputData)

      if(this.selectedImage){
        inputData.append('avatar', this.selectedImage);
      }

      this.allService.createData(this.allService.userUrl, inputData).subscribe(
        (data: any) => {
          console.log('data', data)
          this.isRefreshTable = true;
          this.type = 'edit';
          this.importData = data;
          this.ToastrService.typeSuccessCreate()
          this.loaded();
  
        },
        err => {
          this.ToastrService.typeErrorCreate()
          console.log('err', err)
          this.loaded()
        }
      )
    }
  }


  editData() {
    if (this.isValid()) {
      this.loading();
      const inputData = new FormData(); 
      inputData.append('name', this.f.name.value || '');
      inputData.append('email', this.f.email.value || '');
      inputData.append('gender', this.f.gender.value || '');
      inputData.append('roleId', this.f.roleId.value || '');

      console.log('json data', inputData)

      if(this.selectedImage){
        inputData.append('avatar', this.selectedImage);
      }

      this.allService.editData(this.allService.userUrl+'/', inputData, this.importData.data.id).subscribe(
        data => {
          console.log('data', data);
          this.isRefreshTable = true;
          this.ToastrService.typeSuccessEdit();
          this.loaded();
        },
        err => {
          this.ToastrService.typeErrorEdit()
          console.log('err', err);
          this.loaded();
        }
      );
    }
  }

  isValid() {
    if (!this.inputGroup.valid || this.loadingSubmit || this.loadingGet.length > 0) {
      return false
    }
    return true;
  }

  loading() {
    this.inputGroup.disable()
    this.loadingSubmit = true;
  }

  loaded() {
    this.inputGroup.enable()
    this.loadingSubmit = false;
  }

  closeForm() {
    this.allFunction.closeDialog(this.dataDetail.form_name)
    setTimeout(() => {
      this.dialogRef.close(
        { is_refresh: this.isRefreshTable }
      );
    }, this.allFunction.closeDelaySmall);
  }
}
