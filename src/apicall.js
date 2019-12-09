export class Doctor {
  constructor() {
    this.errorMessage;
  }
  async getDoctorByName(name) {
    try {
      let response = await fetch (`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=45.505%2C-122.675%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      if (!response.ok) {
        let error = ("2 There was an error handling your request: " + response.statusText);
        this.errorMessage = error;
      }
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      let errorMessage = ("1 There was an error handling your request: " + error.message);
      this.errorMessage = errorMessage;
    }
  }
  async getDoctorBySymptom(symptom) {
    try {
      let response = await fetch (`https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=45.505%2C-122.675%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      if (!response.ok) {
        let error = ("There was an error handling your request: " + response.statusText);
        this.errorMessage = error;
      }
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      let errorMessage = ("There was an error handling your request: " + error.message);
      this.errorMessage = errorMessage;
    }
  }
}
