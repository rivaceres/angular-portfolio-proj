import { Component, Injector, PLATFORM_ID, afterNextRender, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-portfolio-proj');
  protected readonly loading = signal(true);
  protected readonly page = signal('home');

  private injector = inject(Injector);

  constructor() {
    if (!isPlatformBrowser(inject(PLATFORM_ID))) return;
    inject(Router).events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        this.page.set(e.url.split(/[/?#]/)[1] || 'home');
        this.loading.set(true);
      } else if (e instanceof NavigationEnd) {
        this.page.set(e.urlAfterRedirects.split(/[/?#]/)[1] || 'home');
        afterNextRender(() => this.waitForImages(), { injector: this.injector });
      }
    });
  }

  // Hide the skeleton once the page's <img> and CSS background images load, capped at 5s.
  private async waitForImages() {
    const main = document.querySelector('main')!;
    const urls = new Set<string>();
    main.querySelectorAll('img').forEach((img) => img.src && urls.add(img.src));
    main.querySelectorAll('*').forEach((el) => {
      const m = getComputedStyle(el).backgroundImage.match(/url\(["']?(.*?)["']?\)/);
      if (m) urls.add(m[1]);
    });
    const loads = [...urls].map(
      (src) =>
        new Promise<void>((done) => {
          const img = new Image();
          img.onload = img.onerror = () => done();
          img.src = src;
        })
    );
    await Promise.race([Promise.all(loads), new Promise((r) => setTimeout(r, 5000))]);
    this.loading.set(false);
  }
}
