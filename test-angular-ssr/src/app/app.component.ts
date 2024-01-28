import { User } from '@prisma/client';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public title = 'test-angular-ssr';
  public users?: Observable<User[]>;

  constructor(private readonly http: HttpClient) {}

  public ngOnInit() {
    if (document) {
      initFlowbite();
    }

    this.users = this.http.get<User[]>('http://localhost:3000/api/users');
  }
}
