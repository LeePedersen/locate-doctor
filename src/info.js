export class Info {
  constructor(doctor) {
    this.doctor = doctor;
    this.name = doctor.profile.first_name + " " + doctor.profile.last_name;
    this.practiceName = ("Practice: " + doctor.practices[0].name);
    this.address = ("Address: " + doctor.practices[0].visit_address.street + ", " + doctor.practices[0].visit_address.city + ", " + doctor.practices[0].visit_address.state);
    this.number = doctor.practices[0].phones[0].number;
  }
  checkIfAcceptingNew() {
    if (this.doctor.practices[0].accepts_new_patients) {
      this.accepting = "This doctor is accepting new patients";
    } else {
      this.accepting = "This doctor is not accepting new patients at this time";
    }
  }
  checkIfHasWebsite() {
    if (this.doctor.practices[0].website) {
      this.website = this.doctor.practices[0].website;
    } else {
      this.website = "No website information available";
    }
  }
}
