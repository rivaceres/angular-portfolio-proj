import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements AfterViewInit {

  ngAfterViewInit() {
    const elements = document.querySelectorAll('.animate-up');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    elements.forEach((el) => observer.observe(el));
  }
}
