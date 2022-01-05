//define form object and variables
const form = document.querySelector("form");
const dateInput = form.elements.date;
const monthInput = form.elements.month;
const yearInput = form.elements.year;
const userName = form.elements.name;
const userGender = form.elements.gender;

//Radio input Variables
const maleRadio = form.elements[4];
const femaleRadio = form.elements[5];

//Array Declarations
const dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
const maleAkan = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yao","Kofi","Kwame",];
const femaleAkan = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

//Form submit event
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const dateBorn = calculateDay(
    dateInput.value,
    monthInput.value,
    yearInput.value
  );

  const gotAkan = assignAkan(userGender, dateBorn);
  alert(`Hey ${userName.value} , You were born on ${weekDay(dateBorn)}.Your Akan Name is ${gotAkan}`);
  form.reset();
});

//Validate date
dateInput.addEventListener("input", (e) => {
  e.preventDefault();
  if (dateInput.value <= 0 || dateInput.value > 31) {
    alert("Invalid Date:Date should be ( 1 - 12 )");
    dateInput.value = "";
  }
});

//Validate month
monthInput.addEventListener("input", (e) => {
  e.preventDefault();
  if (monthInput.value <= 0 || monthInput.value > 12) {
    alert("Invalid Month:Month should be ( 1 - 12 )");
    monthInput.value = "";
  }
});

//validate year
yearInput.addEventListener("input", (e) => {
  e.preventDefault();
  if (yearInput.value <= 0 || yearInput.value > 2022) {
    alert("Invalid Year: Year should be ( 1900 - 2022 )");
    yearInput.value = "";
  }
});

//Catch Less than 1900 year
yearInput.addEventListener("blur", (e) => {
  e.preventDefault();
  if (yearInput.value > 0 && yearInput.value < 1900) {
    alert("Are You one of the 27 Dead Apostle Ancestors");
    yearInput.value = "";
  }
});

//Function for calculating day of the week as a number where * Sunday = 0 *
const calculateDay = (userDay, userMonth, userYear) => {

  const century_Digit = parseInt( userYear.substr(0, 2) );
  const year_Digit = parseInt(userYear.substr(2, 4));
  const month = parseInt(userMonth);
  const date = parseInt(day);

  return Math.floor(((century_Digit / 4) - 2 * (century_Digit - 1))+
      (5 * (year_Digit / 4)) +
      (26 * (month + 1) / 10) +
      date %
      7)
};

const weekDay = (notday) => dayOfWeek [notday];

// Assign function
const assignAkan = (gender, day) => {
  const assign_Gender = gender.value;

  if (day >= 0 && day <= 6 && assign_Gender == maleRadio.value) {
    return maleAkan[day];
  }else if(day >= 0 && day <= 6 && assign_Gender === femaleRadio.value) {
    return femaleAkan[day];
  }else {
    return "NO AKAN NAME!!";
  }
};