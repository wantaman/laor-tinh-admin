import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllService } from '@core/service/allApi.service';
import { GeneralFunctionService } from '@core/service/general-function.service';
import { NGXToastrService } from '@core/service/toast.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent {
  type: any;
  importData: any;
  loadingGet = []
  loadingSubmit = false;
  isRefreshTable = false;
  // imageUrl: string = '';
  imageUrl: string | null = 'assets/images/no-image.png';
  cateList: any;

  inputGroup = new FormGroup({
    name: new FormControl('', Validators.required),
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

    }
  }

  ngOnInit() {

  }

  get f() {
    return this.inputGroup.controls
  }


  getDataDetail() {
    this.loadingGet.push()
    this.allService.getDataById(this.allService.categoryUrl, '/' + this.importData.id).subscribe(
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
  }

  createData() {
    if (this.isValid()) {
      this.loading()
      const tmp_data = {
        "name": this.f.name.value
      }
      console.log('json data', tmp_data)

      this.allService.createData(this.allService.categoryUrl, tmp_data).subscribe(
        (data: any) => {
          console.log('data', data)
          this.isRefreshTable = true;
          this.type = 'edit'
          this.importData = data
          this.ToastrService.typeSuccessCreate()
          this.loaded()
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
      const tmp_data = {
        "name": this.f.name.value,
      }

      this.allService.editData(this.allService.categoryUrl+'/', tmp_data, this.importData.data.id).subscribe(
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
