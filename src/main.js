import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctor } from './../src/apicall.js';

$(document).ready(function() {


  (async () => {
    let newDoc = new Doctor();
    const response = await newDoc.getDoctorBySymptom("cough");
    getElements(response);
  })();

  function getElements(response) {
    console.log(response);
  }

});
