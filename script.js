function calculate() {
    // Get the input values
    var yourBirthdate = document.getElementById("your-birthdate").value;
    var otherBirthdate = document.getElementById("other-birthdate").value;

    // Convert the input values to Date objects
    var yourDate = new Date(yourBirthdate);
    var otherDate = new Date(otherBirthdate);

    // Calculate the difference in milliseconds
    var diff = Math.abs(yourDate.getTime() - otherDate.getTime());

    // Calculate the difference in days
    var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    /*The Math.ceil() static method always rounds up and returns the smaller integer greater than or equal to a given number.*/
    // Calculate the difference in years and days
    var diffYears = Math.floor(diffDays / 365);
    /*The Math.floor() static method always rounds up and returns the largest integer greater than or equal to a given number.*/

    var diffDaysRemainder = diffDays % 365;

    // Display the result
    var ageDifference = document.getElementById("age-difference");
    ageDifference.innerHTML =
      "Age difference: " +
      diffYears +
      " years and " +
      diffDaysRemainder +
      " days";
  }