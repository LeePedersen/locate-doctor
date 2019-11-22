export class Info {
  constructor(doctor) {
    this.doctor = doctor;
    this.name = doctor.profile.first_name + " " + doctor.profile.last_name;
    this.practiceName = ("Practice: " + doctor.practices[0].name);
    this.address = ("Address: " + doctor.practices[0].visit_address.street + ", " + doctor.practices[0].visit_address.city + ", " + doctor.practices[0].visit_address.state);
  }
}

// for (var i = 0; i < this.doctor.practices.length; i++) {
//   docInfo.push("<br>Practice " + (i + 1) + ": " + this.doctor.practices[0].name + "<br>");
// }
