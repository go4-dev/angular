import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnDestroy, OnInit {

  posts: any = [];
  subscriptions: any[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.subscriptions.push(this.api.getRequest().subscribe((data: any) => {
      this.posts = [...data];
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}