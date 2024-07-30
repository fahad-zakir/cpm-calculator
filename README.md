# CPM Calculator
- https://cpmcalculator.netlify.app/

## Overview
The CPM Calculator is a web application that helps users calculate the total cost of an advertising campaign, the number of impressions, or the Cost Per Mille (CPM). Users can input any two of these values, and the calculator will compute the third. The application features a modern, high-tech design with a user-friendly interface.

## Features
- Calculate the total cost of a campaign based on CPM and number of impressions.
- Determine the number of impressions based on total cost and CPM.
- Find the CPM based on the total cost and number of impressions.
- Error handling for incomplete or excessive input.
- Modern, responsive design with high-tech visuals.

## Technologies Used
- HTML
- CSS
- JavaScript

## Usage
1. Open the `index.html` file in your web browser.
2. Enter any two of the following values:
   - Total cost of campaign
   - Cost per 1,000 impressions (CPM)
   - Number of impressions
3. Click the "Calculate" button to compute the missing value.
4. If you want to reset the form, click the "Start Over" button.

## Error Messages
- If less than two fields are filled in, the following error message will be displayed:
  ```
  Enter two out of three options then hit ‘Calculate’ to identify the missing field. Oops! It does not appear you entered enough information. Please enter two values in order to solve for the other field.
  ```
- If all three fields are filled in, the following error message will be displayed:
  ```
  It looks like you entered all the information already! With this calculator, you just enter two of the fields and it solves for the last one.
  ```

## Installation
No installation is required. Simply download the project files and open `index.html` in a web browser.

## Project Structure
```
CPM-Calculator/
│
├── index.html
├── style.css
└── script.js
```

## HTML Structure
The `index.html` file contains the basic structure and form for the calculator:
- Inputs for total cost, CPM, and number of impressions.
- Buttons for calculating the missing value and resetting the form.
- An error message display area.

## CSS Styling
The `style.css` file includes styles to create a modern and high-tech design, with colors like gray, red, and black, and various visual effects.

## JavaScript Functionality
The `script.js` file contains the logic for the CPM calculations and error handling. It listens for button clicks and performs the necessary calculations based on user input.

## Contributing
Feel free to fork the project, make enhancements, and submit pull requests. Contributions are always welcome!

## License
This project is licensed under the MIT License.

## Contact
For any questions or suggestions, please contact fahadzakir11@gmail.com.

---

Feel free to modify any part of the README to better suit your project needs or personal preferences.