import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hero',
  standalone: true,
  imports: [CommonModule],
  template: `<section class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="lg:w-1/2">
        <!-- Uncomment and update the src attribute when you have the image -->
        <!-- <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" class="max-w-sm rounded-lg shadow-2xl" alt="Hero Image" /> -->
      </div>
      <div class="lg:w-1/2">
        <h1 class="text-5xl font-bold">Welcome to Our Amazing Platform</h1>
        <p class="py-6">Discover the power of innovation and simplicity</p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </section>`,
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
