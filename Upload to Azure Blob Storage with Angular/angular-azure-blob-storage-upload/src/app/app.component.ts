import { Component, OnInit } from '@angular/core';
import { AzureBlobStorageService } from './azure-blob-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  picturesList: string[] = [];
  sas: string = "";

  constructor(private blobService: AzureBlobStorageService) {}

  ngOnInit(): void {
    this.reloadImagesList();
  }

  deleteImage(name: string) {
    this.blobService.deleteImage(this.sas, name, () => {
      this.reloadImagesList();
    })
  }

  imageSelected(event: Event) {
    let file: File = (event.target as HTMLInputElement).files![0];
    this.blobService.uploadImage(this.sas, file, file.name, () => {
      this.reloadImagesList();
    })
  }

  setSas(event: Event) {
    this.sas = (event.target as HTMLInputElement).value;
  }

  reloadImagesList(): void {
    this.blobService.listImages().then(list => {
      this.picturesList = [...list];
    })
  }

  downloadImage(name: string) {
    this.blobService.downloadImage(name, blob => {
      let url = window.URL.createObjectURL(blob);
      window.open(url);
    })
  }
}
