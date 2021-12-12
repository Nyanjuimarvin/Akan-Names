//define form object and variables
const form = document.querySelector('form');
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

//Function for calculating day of the week as a number where * Sunday = 0 *
const calculateDay = ( dateVal, monthVal, yearVal )=>{
    var year_String = yearVal.toString();
    var century_Digit = year_String.substr(0,2);
    var year_Digit = century_Digit.substr(2,4);
    return  (((parseInt( century_Digit)/4 ) - 2 * ( parseInt( century_Digit ) - 1) +
            (5 * (parseInt( year_Digit ) / 4)) + (26 * ( parseInt( monthVal )+1) / 10) +
            parseInt( dateVal )) % 7);
            
}
