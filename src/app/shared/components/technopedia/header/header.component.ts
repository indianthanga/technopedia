import { ElementRef, HostListener, Inject, Renderer2 } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Technopedia';
  languageDisplay: boolean = false;
  authorDisplay: boolean = false;
  menuDisplay: boolean = false;
  fullScreen: boolean = false;
  @ViewChild('languageDropDown') languageDropDown!: ElementRef;
  @ViewChild('authorDropDown') authorDropDown!: ElementRef;
  element: any;
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: any
  ) {}

  ngOnInit(): void {
    this.element = this.document.documentElement;
  }
  fullScreenToggle(): void {
    this.fullScreen = !this.fullScreen;
    if (this.fullScreen) this.openFullScreen();
    else this.closeFullScreen();
  }
  openFullScreen(): void {
    if (this.element.requestFullscreen) {
      this.element.requestFullscreen();
    } else if (this.element.mozRequestFullScreen) {
      /* Firefox */
      this.element.mozRequestFullScreen();
    } else if (this.element.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.element.webkitRequestFullscreen();
    } else if (this.element.msRequestFullscreen) {
      /* IE/Edge */
      this.element.msRequestFullscreen();
    }
  }

  closeFullScreen(): void {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }

  @HostListener('document:fullscreenchange', ['$event'])
  @HostListener('document:webkitfullscreenchange', ['$event'])
  @HostListener('document:mozfullscreenchange', ['$event'])
  @HostListener('document:MSFullscreenChange', ['$event'])
  fullscreenmode() {
    if (
      this.document.fullscreenElement ||
      this.document.mozFullScreenElement ||
      this.document.webkitFullscreenElement ||
      this.document.msFullscreenElement
    ) {
      this.fullScreen = true;
    } else this.fullScreen = false;
  }
}
