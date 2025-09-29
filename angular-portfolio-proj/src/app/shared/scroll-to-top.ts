import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  standalone: false,
  templateUrl: './scroll-to-top.html',
  styleUrl: './scroll-to-top.css'
})
export class ScrollToTop {
isVisible = false;

  @HostListener('window:scroll')
  checkScrollVisibility() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    this.isVisible = scrollPosition > 200;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
