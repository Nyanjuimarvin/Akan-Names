//define form object and variables
const form = document.querySelector("form");
const dateInput = form.elements.date;
const monthInput = form.elements.month;
const yearInput = form.elements.year;

//Define value variables
const dateVal = dateInput.value;
const monthVal = monthInput.value;
const yearVal = yearInput.value;

//Array Declarations

const dayOfWeek = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
const maleAkan = [ "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame" ];
const femaleAkan = [ "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama" ];

//validate form input

//Validate date
dateInput.addEventListener( 'input',(e)=>{
    e.preventDefault();
    if(dateInput.value <= 0 || dateInput.value > 31 ){
        alert( 'Invalid Date:Date should be ( 1 - 12 )');
        dateInput.value = '';
    }
});

//Validate month
monthInput.addEventListener('input',(e)=>{
    e.preventDefault();
    if(monthInput.value <= 0 || monthInput.value > 12){
        alert( 'Invalid Month:Month should be ( 1 - 12 )');
        monthInput.value = '';
    }
});

//validate year
yearInput.addEventListener( 'input', (e) => {
  e.preventDefault();
  if ( yearInput.value <= 0 || yearInput.value > 2022 ) {
    alert( "Invalid Year: Year should be ( 1900 - 2022 )");
    yearInput.value = "";
  }
});

//Catch Less than 1900 year
yearInput.addEventListener('blur',(e)=>{
    e.preventDefault();
    if( yearInput.value > 0 && yearInput.value < 1900 ){
        confirm( "Are You one of 27 Dead Apostle Ancestors" );
        yearInput.value = "";
    }
});

//Function for calculating day of the week as a number where * Sunday = 0 *
const calculateDay = (dateVal, monthVal, yearVal) => {
  var year_String = yearVal.toString();
  var century_Digit = year_String.substr(0, 2);
  var year_Digit = century_Digit.substr(2, 4);
  return Math.floor(
    (parseInt(century_Digit) / 4 -
      2 * (parseInt(century_Digit) - 1) +
      5 * (parseInt(year_Digit) / 4) +
      (26 * (parseInt(monthVal) + 1)) / 10 +
      parseInt(dateVal)) %
      7
  );
};
