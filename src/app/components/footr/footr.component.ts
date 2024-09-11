import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'footr',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footr.component.html',
  styleUrl: './footr.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FootrComponent {}
