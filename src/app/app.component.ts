import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class AppComponent implements OnInit {
  public title: string = 'FIFA Draw';

  constructor(private readonly router: Router) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['todos']);
    }, 10000);
  }
}

