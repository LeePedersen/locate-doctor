import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctor } from './../src/apicall.js';
import { Info } from './../src/info.js';

$(document).ready(function() {

  $("#nameInput").click(function() {
    $(".results").empty();
    (async () => {
      let newDoc = new Doctor();
      console.log(newDoc);
      if (newDoc.errorMessage) {
        console.log(newDoc.errorMessage);
        $(".results").append(newDoc.errorMessage);
      }
      const response = await newDoc.getDoctorByName($("#name").val());
      getElements(response);
    })();

    function getElements(response) {
      if (response.data.length > 0) {
        for (var i = 0; i < response.data.length; i++) {
          let newInfo = new Info(response.data[i]);
          newInfo.checkIfAcceptingNew();
          newInfo.checkIfHasWebsite();
          $(".results").append("<h3>" + newInfo.name + "</h3><p>" + newInfo.practiceName + "</p><p>" + newInfo.address + "</p><p>" + newInfo.number + "</p><p>" + newInfo.accepting + "</p><p>" + newInfo.website + "</p><br>");
        }
      } else {
        $(".results").append("Sorry, no doctors match your criteria");
      }
    }
  });

  $("#symptomInput").click(function() {
    $(".results").empty();
    (async () => {
      let notherNewDoc = new Doctor();
      if (notherNewDoc.errorMessage) {
        $(".results").append(notherNewDoc.errorMessage);
      }
      const response = await notherNewDoc.getDoctorBySymptom($("#symptom").val());
      getElements(response);
    })();

    function getElements(response) {
      if (response.data.length > 0) {
        for (let i = 0; i < response.data.length; i++) {
          let newInfo = new Info(response.data[i]);
          newInfo.checkIfAcceptingNew();
          newInfo.checkIfHasWebsite();
          $(".results").append("<h3>" + newInfo.name + "</h3><p>" + newInfo.practiceName + "</p><p>" + newInfo.address + "</p><p>" + newInfo.number + "</p><p>" + newInfo.accepting + "</p><p>" + newInfo.website + "</p><br>");
        }
      } else {
        $(".results").append("Sorry, no doctors match your criteria");
      }
    }
  });
});
