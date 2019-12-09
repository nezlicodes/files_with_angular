import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  imageURL: string;
  uploadForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.uploadForm = this.fb.group({
      avatar: [null],
      name: ['']
    });
  }

  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.uploadForm.patchValue({
      avatar: file
    });
    this.uploadForm.get('avatar').updateValueAndValidity();
    
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file);
  }

  submit() {
    console.log(this.uploadForm.value)
  }

}
