import { Component, OnInit } from '@angular/core';
import { PartnerDTO } from 'models';
import { PartnerService } from '../partner.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  partners: PartnerDTO[] = [];

  constructor(
    private partnerService: PartnerService,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.partnerService.getAll().subscribe({
      next: (partners) => {
        this.partners = partners;
        console.log(partners);
      },
      error: (err) => console.log(err)
    });
  }

  editPartner(partner: PartnerDTO) {
    this.router.navigate(['/new-partner', partner.id]);
  }

  deletePartner(partner: PartnerDTO) {
    this.partnerService.delete(partner.id).subscribe({
      next: () => {
        const index = this.partners.indexOf(partner);
        if (index > -1) {
          this.partners.splice(index, 1);
        }
      },
      error: (err) => {
        this.toastrService.error('Hiba a törléskor', 'Hiba');
      }
    });
  }
}
