import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  let city = $('#location').val();
  $('#location').val("");

  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=${process.}`;
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });

  promise.then(function(response) {
    let body = JSON.parse(response);
    $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
    $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });
});
