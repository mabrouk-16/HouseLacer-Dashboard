import { IUser } from "./user";

export interface IOffer {
  _id:String;
  project: String;
  description: String;
  price: Number;
  time: Number;
  status: String;
  //   enum: ["pending", "accepted", "rejected"],
  file: String;
  createdBy: IUser;
  createdAt: String;
  updatedBy: String;
  timestamps?: true;
}
