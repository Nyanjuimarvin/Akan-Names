//define form object and variables
const form = document.querySelector('form');
const dateInput = form.elements.date;
const monthInput = form.elements.month;
const yearInput = form.elements.year;

//Define value variables
const dateVal = dateInput.value;
const monthVal = monthInput.value;
const yearVal = yearInput.value;

//Function for calculating Day
const calculateDay = ( dateVal, monthVal, yearVal )=>{
    var year_String = yearVal.toString();
    var century_Digit = year_String.substr(0,2);
    var year_Digit = century_Digit.substr(2,4);
    return  (((parseInt( century_Digit)/4 ) - 2 * ( parseInt( century_Digit ) - 1) +
            (5 * (parseInt( year_Digit ) / 4)) + (26 * ( parseInt( monthVal )+1) / 10) +
            parseInt( dateVal )) % 7);
            
}