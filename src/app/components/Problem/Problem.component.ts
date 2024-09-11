import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'problem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Problem.component.html',
  styleUrl: './Problem.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProblemComponent {}
