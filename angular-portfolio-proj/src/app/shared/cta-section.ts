import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-cta-section',
  standalone: false,
  templateUrl: './cta-section.html',
  styleUrl: './cta-section.css',
})
export class CtaSection implements AfterViewInit {
  ngAfterViewInit() {
    const elements = document.querySelectorAll('.animate-up');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }
}
