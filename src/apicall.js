export class Doctor {
  async getDoctorBySymptom(symptom) {
    let response = await fetch (`https://api.betterdoctor.com/2016-03-01/doctors?name=Smith&location=45.505%2C-122.675%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=4673d02a855d648150ab936ef94c04a7`);
    let jsonifiedResponse = await response.json();

    return jsonifiedResponse;
  }
}

// (`https://api.betterdoctor.com/2016-03-01/doctors?location=45.505,-122.675,100&skip=2&limit=10&user_key=4673d02a855d648150ab936ef94c04a7`);
