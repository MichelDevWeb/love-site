import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import {interval, Subject} from 'rxjs';

export interface Entry {
  created: Date;
  id: string;
}

export interface TimeSpan {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
    selector: 'app-valentine',
    templateUrl: './valentine.component.html',
    styleUrls: ['./valentine.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ValentineComponent implements OnInit, OnDestroy {
  data = {
    title: 'Love site: Michel & Olivia',
    description: 'Valentine 2021',
    image: 'avatar.png',
    headerTitle: 'In Relationship'
  };
  focus: any;
  focus1: any;

  // entry: Entry = { id: 'anniversary', created: new Date(new Date().getTime() - new Date(2018, 10, 4, 2, 30).getTime() ) };
  // entry: Entry = { id: 'anniversary', created: new Date(2018, 10, 4, 2, 30) };
  entry: Entry = { id: 'anniversary', created: new Date(new Date('October 4, 2018').getTime()) };

  slides = [
    { id: 1, name: 'Phú Quốc 2020'},
    { id: 2, name: 'Phú Quốc 2020'},
    { id: 3, name: 'Đà Nẵng 2019'},
    { id: 4, name: 'SaPa 2019'},
    { id: 5, name: 'Hà Nội 2019'},
    { id: 6, name: 'Phú Quốc 2020'},
    { id: 7, name: 'Phú Quốc 2020'},
  ]
  today = new Date();
  dayInMonth: any;

  private destroyed$ = new Subject();

  constructor(private title: Title, private meta: Meta, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.setContentDynamic();
    this.title.setTitle(this.data.title);
    this.meta.addTags([
      { name: 'twitter:card', content: 'summary' },
      { name: 'og:url', content: '/home' },
      { name: 'og:title', content: this.data.title },
      { name: 'og:description', content: this.data.description },
      { name: 'og:image', content: this.data.image }
    ]);
    this.dayInMonth = new Date(this.today.getUTCFullYear(), this.today.getUTCMonth() + 1, 0).getDate();

    interval(1000).subscribe(() => {
      if (!this.changeDetector['destroyed']) {
        this.changeDetector.detectChanges();
      }
    });

    this.changeDetector.detectChanges();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  setContentDynamic() {
    const currentMonth = this.today.getMonth() + 1;
    const currentDate = this.today.getDate(); 

    // Check is Valentine's Day
    if (currentMonth === 2 && currentDate === 14) {
      this.data.headerTitle = `Happy Valentine's Day`;
    } else if (currentDate === 4) {
      this.data.headerTitle = 'Happy Small Anniversary'
      if (currentMonth === 10) {
        this.data.headerTitle = 'Happy Anniversary'
      }
    }
  }

  counter(i: number) {
    return new Array(i);
  } 



  getElapsedTime(entry: Entry): TimeSpan {
    let totalSeconds = Math.floor((new Date().getTime() - entry.created.getTime()) / 1000);
    let years = 0;
    let months = 0
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if (totalSeconds >= 31536000) {
      years = Math.floor(totalSeconds / 31536000);
      totalSeconds -= 31536000 * years;
    }

    if (totalSeconds >= (this.dayInMonth * 86400)) {
      months = Math.floor(totalSeconds / ((this.dayInMonth - 1) * 86400));
      totalSeconds -= ((this.dayInMonth - 1) * 86400) * months;
    }

    if (totalSeconds >= 86400) {
      days = Math.floor((totalSeconds) / 86400);
      totalSeconds -= 86400 * days;
    }

    if (totalSeconds >= 3600) {
      hours = Math.floor(totalSeconds / 3600);
      totalSeconds -= 3600 * hours;
    }

    if (totalSeconds >= 60) {
      minutes = Math.floor(totalSeconds / 60);
      totalSeconds -= 60 * minutes;
    }

    seconds = totalSeconds;

    return {
      years: years,
      months: months,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

}
