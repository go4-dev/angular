import { Injectable } from '@angular/core';
import { BlobServiceClient, ContainerClient } from '@azure/storage-blob';

@Injectable({
  providedIn: 'root',
})
export class AzureBlobStorageService {
  accountName: string = 'myblobstorageqwerty';
  containerName: string = 'pictures';

  constructor() {}

  async listImages(): Promise<string[]> {
    let result: string[] = [];

    let blobs = this.containerClient().listBlobsFlat();

    for await (const blob of blobs) {
      result.push(blob.name);
    }

    return result;
  }

  downloadImage(name: string, handler: (blob: Blob) => void) {
    const blobClient = this. containerClient().getBlobClient(name);
    blobClient.download().then(resp => {
      resp.blobBody!.then(blob => {
        handler(blob);
      })
    })
  }

  deleteImage(sas: string, name: string, handler: () => void) {
    this.containerClient(sas).deleteBlob(name).then(() => {
      handler();
    })
  }

  uploadImage(sas: string, content: Blob, name: string, handler: () => void) {
    const blobBlockClient = this.containerClient(sas).getBlockBlobClient(name);
    blobBlockClient.uploadData(content, { blobHTTPHeaders: {blobContentType: content.type } })
    .then(() => handler());
  }

  containerClient(sas?: string): ContainerClient {
    let token = "";
    if (sas) {
      token = sas;
    }

    return new BlobServiceClient(
      `https://${this.accountName}.blob.core.windows.net?${token}`
    ).getContainerClient(this.containerName);
  }
}
