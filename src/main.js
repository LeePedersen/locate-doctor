import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctor } from './../src/apicall.js';

$(document).ready(function() {

  $("#nameInput").click(function() {
    (async () => {
      let newDoc = new Doctor();
      const response = await newDoc.getDoctorByName($("#name").val());
      getElements(response);
    })();

    function getElements(response) {
      console.log(response);
      for (let i = 0; i < response.data.length; i++) {
        $(".results").append("<ul>" + response.data[i].profile.first_name + " " + response.data[i].profile.last_name);
      }
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
          $(".results").append("<ul id='docNames" + i + "'>" + response.data[i].profile.first_name + " " + response.data[i].profile.last_name);
        console.log(response.data[2]);
        for (let j = 0; j < response.data[i].specialties.length; j++) {
          $("#docNames" + i).append("<li>" + response.data[i].specialties[j].uid + "</li>");
        }

      }
    }
  });

});
