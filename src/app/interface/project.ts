import { IOffer } from './offer';

export interface IProject {
  _id: String;
  title: String;
  description: String;
  category: String;
  designersOffers: String[];
  expectedPrice: String;
  // enum: [
  //   '25 - 50$',
  //   '50 - 100$',
  //   '100 - 250$',
  //   '250 - 500$',
  //   '500 - 1000$',
  //   '1000 - 2500$',
  //   '2500 -5000$',
  //   '5000 - 10000$'
  // ];
  expectedTime: Number;
  status: String;
  createdBy: String;
  offer: IOffer[];
  // enum: ['open', 'closed', 'completed'];
  file: String;
  updatedBy: String;
}
