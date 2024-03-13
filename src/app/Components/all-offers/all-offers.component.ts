import { Component } from '@angular/core';
import { IOffer } from '../../interface/offer';
import { ApiService } from '../../services/Api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-offers',
  templateUrl: './all-offers.component.html',
  styleUrl: './all-offers.component.css',
})
export class AllOffersComponent {
  allOffers: IOffer[] | undefined;
  offers: IOffer[] | undefined = [];
  offer: IOffer | undefined;
  offerID: String = '';
  projectID: String = '';
  searchId: string = '';
  constructor(private ApiServ: ApiService, private route: ActivatedRoute) {
    this.ApiServ.getAllOffers().subscribe({
      next: (res) => {
        this.offers = [...res.data];
        this.allOffers = [...res.data];
        console.log(this.offers);
      },
    });
    // this.projectID = this.route.snapshot.params['id'];
    // console.log(this.route.snapshot.params['id']);
    // this.ApiServ.getProjects().subscribe({
    //   next: (res) => {
    //     // console.log(res);
    //     res.data.forEach((pro) => {
    //       if (pro._id == this.projectID) {
    //         // this.offers?.push(pro.offer);
    //         console.log(pro);
    //         this.offers = [...pro.offer];
    //         console.log(this.offers);
    //       }
    //     });
    //   },
    // });
  }
  showItem(item: IOffer) {
    this.offer = item;
    this.offerID = item._id;
  }
  deleteItem() {
    alert(this.offerID);
    this.ApiServ.deleteOffer(this.offerID).subscribe({
      next: (res) => {
        alert(res.message);
        location.reload();
      },
      error: (err) => {
        alert(err);
      },
    });
  }
  searchItems(search: string) {
    // this.project = this.projects.find(
    //   (pro) => pro._id == search || pro.title.includes(search)
    // );
    this.offers = this.allOffers?.filter((offer) =>
      offer.description.includes(search)
    );
    console.log(this.offers);
  }
}
