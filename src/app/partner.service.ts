import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PartnerDTO } from 'models';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<PartnerDTO[]>('/api/new-partner');
  }

  getOne(id: number) {
    return this.http.get<PartnerDTO>('/api/new-partner/' + id);
  }

  create(product: PartnerDTO) {
    return this.http.post<PartnerDTO>('/api/new-partner', product);
  }

  update(product: PartnerDTO) {
    return this.http.put<PartnerDTO>('/api/new-partner', product);
  }

  delete(id: number) {
    return this.http.delete('/api/new-partner/' + id);
  }
}
