import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctor } from './../src/apicall.js';

$(document).ready(function() {


  (async () => {
    let newDoc = new Doctor();
    const response = await newDoc.getDoctorByName("Cat");
    getElements(response);
  })();

  function getElements(response) {
    console.log(response);
    let resultArray = [];
    for (let i = 0; i < response.data.length; i++) {
      resultArray.push(response.data[i].profile.first_name);
      resultArray.push(response.data[i].profile.last_name);
      $(".results").append("<br>" + response.data[i].profile.first_name + " " + response.data[i].profile.last_name + "<br>");
    }

  }

});
