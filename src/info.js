export class Info {
  constructor(doctor) {
    this.name = doctor.profile.first_name + " " + doctor.profile.last_name;
    this.practiceName;
  }
  addInfo() {
    let docInfo = [];
    for (var i = 0; i < this.doctor.practices.length; i++) {
      docInfo.push("Name: " + this.doctor.practices[0].name);
    }
    this.practiceName = "docInfo";
  }
}
