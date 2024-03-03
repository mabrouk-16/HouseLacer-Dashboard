export interface IOffer {
  _id:String;
  project: String;
  description: String;
  price: Number;
  time: Number;
  status: String;
  //   enum: ["pending", "accepted", "rejected"],
  file: String;
  createdBy: String;
  updatedBy: String;
  timestamps?: true;
}
