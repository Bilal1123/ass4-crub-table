import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'Angular2 Crud Application';
  public DataArray:any;
  public myForm:FormGroup;

  constructor(){
    this.DataArray=[
      {id:123,name:'bilal',department:'ubit'},
      {id:133,name:'haris',department:'mechanical engineering'},
      {id:113,name:'faizan',department:'chemical engineering'}
    ]

    this.myForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      department: new FormControl('')
    });
  }

  add(){

    let formValue = this.myForm.getRawValue();
    if(formValue.id == '' || formValue.name=='' || formValue.department==''){
      return alert('empty field');
    }
    this.DataArray.push({id:formValue.id,name:formValue.name,department:formValue.department});
    this.myForm.reset();
  }

  editing(formData){
    this.myForm.controls['id'].setValue(formData.id);
    this.myForm.controls['name'].setValue(formData.name);
    this.myForm.controls['department'].setValue(formData.department);
  }
  save(){
    let val = this.myForm.getRawValue();
    let value = this.DataArray.findIndex(data => data.id == val.id);
    this.DataArray[value].id = val.id;
    this.DataArray[value].name = val.name;
    this.DataArray[value].department = val.department;
    this.myForm.reset();
  }

  delete(dataform){
    let value = this.DataArray.findIndex(data => data.id == dataform.id);
    var v = confirm('Are you sure you want to delete this row');
    if(v == true) {
      this.DataArray.splice(value, 1);
    }
  }
}
