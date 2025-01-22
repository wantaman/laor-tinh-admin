import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllService } from '@core/service/allApi.service';
import { GeneralFunctionService } from '@core/service/general-function.service';
import { NGXToastrService } from '@core/service/toast.service';
import { CategoryFormComponent } from 'app/pages/category/category-form/category-form.component';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  type: any;
  importData: any;
  loadingGet = []
  loadingSubmit = false;
  isRefreshTable = false;
  imageUrl: string = '';

  inputGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    discount: new FormControl(''),
    categoryId: new FormControl(''),
    nameColor: new FormControl(''),
    valueColor: new FormControl(''),
    description: new FormControl('')
  })
  selectedImage: any;

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
      this.getImageUrl(this.importData);

    }
  }

  ngOnInit() {

  }

  get f() {
    return this.inputGroup.controls
  }

  onImageSelected(event: any) { 
    const files = event.target.files;
    if (files.length > 0) {
      this.selectedImage = files[0];
      this.getImageUrl({ thumbnail: this.selectedImage });
    }
  }

  getImageUrl(slideShow: any) {
    if (this.selectedImage) {
      this.imageUrl = URL.createObjectURL(this.selectedImage);
    } else {
      if (slideShow.slide_thumbnail) {
        this.imageUrl = slideShow.thumbnail;
      } else {
        this.imageUrl = 'assets/images/no-image.jpg';
      }
    }
  }

  getDataDetail() {
    this.loadingGet.push()
    this.allService.getDataById(this.allService.productUrl, this.importData.id).subscribe(
      data => {
        this.importData = data
        // this.setDataIntoForm()
        this.loadingGet.pop()
        console.log('data detail', data)
      },
      err => {
        this.loadingGet.pop()
        console.log('err', err)
      }
    );
  }

  // setDataIntoForm() {
  //   this.f.link.setValue(this.importData.link)
  //   this.f.order.setValue(this.importData.order)
  //   this.f.is_show.setValue(this.importData.is_show)
  //   this.f.description.setValue(this.importData.description)
  // }

  createData() {
    if (this.isValid()) {
      this.loading()
      let tmp_data = this.formatData();

      this.allService.createData(this.allService.productUrl, tmp_data).subscribe(
        data => {
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
      let tmp_data = this.formatData();
  
      this.allService.editData(this.allService.productUrl, tmp_data, this.importData.id).subscribe(
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

  formatData(){
    let tmp_data = new FormData()
    // tmp_data.append('link', this.f.link.value)
    // tmp_data.append('description', this.f.description.value)
    // tmp_data.append('order', this.f.order.value)
    // tmp_data.append('is_show', this.f.is_show.value.toString())
    
    if (this.selectedImage) {
      tmp_data.append('slide_thumbnail', this.selectedImage);
    }

    return tmp_data;
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
