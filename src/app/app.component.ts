import { Component, OnInit } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public images: Array<string> = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
  ];
  public image: string = "";

  ngOnInit(): void {
    this.defineImage().subscribe(() => {})
  }

  defineImage() {
    return interval(4000).pipe(
      tap(() => this.image = this.images[Math.floor(Math.random() * this.images.length)]))
  }
}
