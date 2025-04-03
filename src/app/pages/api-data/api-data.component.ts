import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css'] // ✅ FIX: It was `styleUrl` (typo)
})
export class ApiDataComponent implements OnInit {
  products: any[] = []; // ✅ Renamed to match real data

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe(data => {
      this.products = data; // ✅ Already sliced in service
    });
  }
}
