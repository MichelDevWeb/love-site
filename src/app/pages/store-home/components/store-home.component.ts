import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-store-home',
    templateUrl: './store-home.component.html',
    styleUrls: ['./store-home.component.scss']
})

export class StoreHomeComponent implements OnInit {
  data = {
    title: 'Than củi Bình Dương - Trọng Nguyễn',
    description: 'Cam kết uy tín chất lượng, giá cả phải chăng, giao hàng tận nơi',
    image: 'avatar.png'
  };
  focus: any;
  focus1: any;

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle(this.data.title);
    this.meta.addTags([
      { name: 'twitter:card', content: 'summary' },
      { name: 'og:url', content: '/home' },
      { name: 'og:title', content: this.data.title },
      { name: 'og:description', content: this.data.description },
      { name: 'og:image', content: this.data.image }
    ]);
  }

}
