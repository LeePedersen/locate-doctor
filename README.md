# _Doctor Location_
#### _Site for finding Portland doctors based on name and symptoms_

#### _Lee Pedersen_

## Description

_This site takes user input as doctor names and symptoms and returns a list of doctors in the Portland area that meet the criteria._

## Known Bugs
_No known bugs_

## Setup
* Clone site to your machine
* Make sure node.js is installed on your system
* Install npm
* Run `npm run build`
* Navigate to the ./dist folder and open index.html in your browser

## Specs

| Spec | Output | Input |
| --- | --- | --- |
| Program reads one-word input medical symptom and returns a list of doctors | "rash" | Dr. Whoever, Dr. Theotherone |
| Program reads name and returns a list of doctors | Dr. Who | Dr. H. Who, Dr F. Who |
| Program returns first name, last name, address, phone number, website and whether or not the doctor is accepting new patients | Dr. Who | Albert Who, 123 Whatsit St., 123-456-7890, https://www.drwho.com, no |
| If the API call results in an error, the program returns a notification stating what the error is. | status: not 200 | Error message |
| If no search results, program returns message | Dr whooo | Dr. Whooo does not exist |
| Program handles multiple word input | rash on my head | Dr. Whoever, Dr. Theotherone |

## Support and Contact Details
_For issues contact support@leepedersen.com_

## Technologies Used
* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery
* Node Package Manager
* Webpack


## Further Exploration
_Check out_ [Google][1] _for more info_
[1]: https://www.google.com/search?client=ubuntu&channel=fs&q=doctors+in+portland+oregon&ie=utf-8&oe=utf-8

### License
*This software is licensed under the MIT license.*

Copyright (c) 2019 **_Lee Pedersen_**
