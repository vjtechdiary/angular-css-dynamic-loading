import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dynamicLoading';
  dynamicFlag = false;
  dynamicCSSUrl: string;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.dynamicCSSUrl = '/assets/dynamic.css';
  }

  dynamicLoading(){
    this.dynamicFlag = true;
  }
}
