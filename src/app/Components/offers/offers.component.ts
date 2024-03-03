import { Component, OnInit } from '@angular/core';
import { IOffer } from '../../interface/offer';
import { OffersService } from '../../services/offers.service';
import { ApiService } from '../../services/Api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
})
export class OffersComponent {
  offers: IOffer[] = [];
  offer: IOffer | undefined;
  offerID: String = '';
  projectID: String = '';
  searchId: string = '';
  constructor(
    private offerServ: OffersService,
    private ApiServ: ApiService,
    private route: ActivatedRoute
  ) {
    this.projectID = this.route.snapshot.params['id'];
    // this.offers = offerServ.getAllOffers();
    console.log(this.route.snapshot.params['id']);
    this.ApiServ.getOfferbyProjectId(this.projectID).subscribe({
      next: (res) => {
        console.log(res);
        this.offers = res.data;
      },
    });
  }
  showItem(item: IOffer) {
    this.offer = item;
    this.offerID = item._id;
  }
  deleteItem(id: String) {
    this.offerServ.deleteOffer(id);
  }
  searchItems(id: String) {
    // for (let i = 0; i < this.offers.length; i++) {
    //   if (this.offers[i]._id == id) {
    //     this.offer = this.offers[i];
    //   } else
    //     this.offer = {
    //       _id: '',
    //       project: '',
    //       description: '',
    //       price: 0,
    //       time: 0,
    //       status: '',
    //       //   enum: ["pending", "accepted", "rejected"],
    //       file: ' ',
    //       createdBy: '',
    //       updatedBy: '',
    //     };
    // }
    this.offer = this.offers.find((pro) => pro._id == id);
    console.log(this.offer);
  }
}
