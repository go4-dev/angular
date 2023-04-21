import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { PersonModel } from '../core/services/models/peson.model';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css'],
})
export class GetComponent implements OnDestroy, OnInit {
  persons: any = [];
  subscriptions: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.api
        .postRequest(new PersonModel(3, 'Bob', 'Marley', 'bobmarley@gmail.com'))
        .subscribe(
          (text: string) => {
            this.dataInit();
            alert(text);
          },
          (error) => {
            this.persons = [];
            alert(error.error);
          }
        )
    );
  }

  delete(id: number): void {
    this.subscriptions.push(
      this.api.deleteRequest(id).subscribe(
        () => {
          this.dataInit();
        },
        (error) => {
          this.dataInit();
          alert(error);
        }
      )
    );
  }

  dataInit(): void {
    this.subscriptions.push(
      this.api.getRequest().subscribe(
        (data: any) => {
          this.persons = [...data];
        },
        (error) => {
          this.persons = [];
          alert(error.error);
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
