import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctor } from './../src/apicall.js';
import { Info } from './../src/info.js';

$(document).ready(function() {

  $("#nameInput").click(function() {
    (async () => {
      let newDoc = new Doctor();
      const response = await newDoc.getDoctorByName($("#name").val());
      getElements(response);
    })();

    function getElements(response) {
      console.log(response);
      for (var i = 0; i < response.data.length; i++) {
        let newInfo = new Info(response.data[i]);
        console.log(newInfo);
      }
      // for (let i = 0; i < response.data.length; i++) {
      //   $(".results").append("<ul>" + response.data[i].profile.first_name + " " + response.data[i].profile.last_name);
      // }
    }
  });

  $("#symptomInput").click(function() {
    (async () => {
      let notherNewDoc = new Doctor();
      const response = await notherNewDoc.getDoctorBySymptom($("#symptom").val());
      getElements(response);
    })();

    function getElements(response) {
      console.log(response);
      for (let i = 0; i < response.data.length; i++) {
          $(".results").append("<ul>" + response.data[i].profile.first_name + " " + response.data[i].profile.last_name + "<p id='docNames" + i + "'> Specialties: </p><p id='address" + i + "'> Address: </p><p id='phoneNumber" + i + "'> Phone Number: </p><p id='accepting" + i + "'> Accepting Patients: </p><p id='website" + i + "'> Website: </p>" );

        console.log(response.data[2]);
        for (let j = 0; j < response.data[i].specialties.length; j++) {
          let specialties = response.data[i].specialties[j].uid.replace(/-/g, " ");
          $("#docNames" + i).append("<li>" + specialties + "</li>");
        }
        for (let j = 0; j < response.data[i].specialties.length; j++) {
          let specialties = response.data[i].specialties[j].uid.replace(/-/g, " ");
          $("#docNames" + i).append("<li>" + specialties + "</li>");
        }
        for (let j = 0; j < response.data[i].specialties.length; j++) {
          let specialties = response.data[i].specialties[j].uid.replace(/-/g, " ");
          $("#docNames" + i).append("<li>" + specialties + "</li>");
        }
        for (let j = 0; j < response.data[i].specialties.length; j++) {
          let specialties = response.data[i].specialties[j].uid.replace(/-/g, " ");
          $("#docNames" + i).append("<li>" + specialties + "</li>");
        }

      }
    }
  });

});
