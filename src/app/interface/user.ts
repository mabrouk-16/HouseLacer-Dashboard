export interface IUser {
  firstName: String;
  lastName: String;
  userName: String;
  email: String;
  password: String;
  phone: String;
  address: String;
  city: String;
  role: String;
  //   enum: ["User", "Admin", "Designer"],
  status: String;
  //   enum: ["offline", "blocked", "online"],
  confirmEmail: Boolean;
  urlToUpdate: String;
  image: String;
  gender: String;
  //   enum: ["male", "female"],
  DOB: String;
  forgetCode: String;
  changePasswordTime?: Date;
  //   timestamps: true;
}
