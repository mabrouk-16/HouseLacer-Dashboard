import { Injectable } from '@angular/core';
import { IOffer } from '../interface/offer';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  offers: IOffer[] = [
    {
      _id: 'sdjskhdjshdjh',
      project: 'pro1',
      description: 'dasdsadas asdsadd adasd',
      price: 240,
      time: 4,
      status: 'pending',
      //   enum: ["pending", "accepted", "rejected"],
      file: 'file String',
      createdBy: 'Jimy',
      updatedBy: 'Jimy',
    },
    {
      _id: 'sdjskhdjshdjh',

      project: 'pro1',
      description: 'dasdsadas asdsadd adasd',
      price: 240,
      time: 4,
      status: 'pending',
      //   enum: ["pending", "accepted", "rejected"],
      file: 'file String',
      createdBy: 'Jimy',
      updatedBy: 'Jimy',
    },
    {
      _id: 'sdjskhdjshdjh',
      project: 'pro2',
      description: 'dasdsadas asdsadd adasd',
      price: 240,
      time: 4,
      status: 'pending',
      //   enum: ["pending", "accepted", "rejected"],
      file: 'file String',
      createdBy: 'Jimy',
      updatedBy: 'Jimy',
    },
    {
      _id: 'sdjskhdjshdjh',

      project: 'pro3',
      description: 'dasdsadas asdsadd adasd',
      price: 240,
      time: 4,
      status: 'accepted',
      //   enum: ["pending", "accepted", "rejected"],
      file: 'file String',
      createdBy: 'Jimy',
      updatedBy: 'Jimy',
    },
    {
      _id: 'sdjskhdjshdjh',
      project: 'pro4',
      description: 'dasdsadas asdsadd adasd',
      price: 240,
      time: 4,
      status: 'rejected',
      //   enum: ["pending", "accepted", "rejected"],
      file: 'file String',
      createdBy: 'Jimy',
      updatedBy: 'Jimy',
    },
  ];
  constructor() {}
  getAllOffers() {
    return this.offers;
  }
  getPendingOffers() {
    this.offers.filter((offer) => {
      offer.status = 'pending';
    });
  }
  getAcceptedOffers() {
    this.offers.filter((offer) => {
      offer.status = 'accepted';
    });
  }
  getRejectedOffers() {
    this.offers.filter((offer) => {
      offer.status = 'rejected';
    });
  }
  deleteOffer(id:String){
    alert(`${id} => deleted`)
  }
}
