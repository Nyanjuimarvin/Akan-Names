//define form object and variables
const form = document.querySelector("form");
const dateInput = form.elements.date;
const monthInput = form.elements.month;
const yearInput = form.elements.year;
const userName = form.elements.name;
const userGender = form.elements.gender;
const Genders = document.getElementsByName('gender');

//Define value variables
const dateVal = dateInput.value;
const monthVal = monthInput.value;
const yearVal = yearInput.value;
const nameVal = userName.value;

//Radio input Variables
const maleRadio = form.elements[4];
const femaleRadio = form.elements[5];

//Array Declarations

const dayOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const maleAkan = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];
const femaleAkan = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

//validate form input

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const dateBorn = calculateDay(dateInput.value,monthInput.value,yearInput.value);
  var alertName = determine(userGender);
  var sortAssign = myGendersSort(userGender);
  alert(`Hey ${userName.value} , You were born on ${weekDay(dateBorn)}..Your Akan Name is ${sortAssign}`);
  form.elements.value = "";
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

//Try Getting gender input values
const myGendersSort = ()=>{
  for(let genderIterator of Genders ){
    if(genderIterator.checked){
      return genderIterator.value;
    }
  }
}

//Save function to a variable *Again*
gender_Decide = myGendersSort();

const returnAkan = (gender_Decide)=>{
if( gender_Decide == "male" ){
  assignMaleAkan(gender_Decide,calculateDay);
}else if( gender_Decide == "female" ){
  assignFemaleAkan(gender_Decide,calculateDay)
}else{
  return "NO AKAN NAME";
}
}

//Function for calculating day of the week as a number where * Sunday = 0 *
const calculateDay = (userDay, userMonth, userYear) => {
  const year_String = userYear.toString();
  const century_Digit = year_String.substr(0, 2);
  const year_Digit = century_Digit.substr(2, 4);
  return Math.floor(
    (Number(century_Digit) / 4 -
      2 * Number(century_Digit) -
      1 +
      (5 * Number(year_Digit)) / 4 +
      (26 * Number(userMonth + 1)) / 10 +
      userDay) %
      7
  );
};

const switchable = calculateDay; //Assign function to a variable *Not a good idea*

const assignMaleAkan = (gender, day) => {
  const assign_Gender = gender;
  const assign_Day = day;

  if (assign_Day === 0 && assign_Gender == maleRadio) {
    return maleAkan[0];
  } else if (assign_Day === 1 && assign_Gender === maleRadio) {
    return maleAkan[1];
  } else if (assign_Day === 2 && assign_Gender === maleRadio) {
    return maleAkan[2];
  } else if (assign_Day === 3 && assign_Gender === maleRadio) {
    return maleAkan[3];
  } else if (assign_Day === 4 && assign_Gender === maleRadio) {
    return maleAkan[3];
  } else if (assign_Day === 5 && assign_Gender === maleRadio) {
    return maleAkan[5];
  } else if (assign_Day === 6 && assign_Gender === maleRadio) {
    return maleAkan[6];
  } else {
    return "NO AKAN NAME!!";
  }
};

const assignFemaleAkan = (gender, day) => {
  const assign_Gender = gender;
  const assign_Day = day;

  if (assign_Day === 0 && assign_Gender === femaleRadio) {
    return femaleAkan[0];
  } else if (assign_Day === 1 && assign_Gender === femaleRadio) {
    return femaleAkan[1];
  } else if (assign_Day === 2 && assign_Gender === femaleRadio) {
    return femaleAkan[2];
  } else if (assign_Day === 3 && assign_Gender === femaleRadio) {
    return femaleAkan[3];
  } else if (assign_Day === 4 && assign_Gender === femaleRadio) {
    return femaleAkan[3];
  } else if (assign_Day === 5 && assign_Gender === femaleRadio) {
    return femaleAkan[5];
  } else if (assign_Day === 6 && assign_Gender === femaleRadio) {
    return femaleAkan[6];
  } else {
    return "NO AKAN NAME!!";
  }
}

const determine = (genderTop)=>{
  if(genderTop == userName[0]){
    return assignMaleAkan(maleRadio,calculateDay);
  }
  else if(genderTop == userName[1]){
    return assignFemaleAkan(femaleRadio, calculateDay);
  }
}

var gender_Holder = (GenderY) => {
  if (GenderY == userGender[0].value) {
    return assignMaleAkan(maleradio,calculateDay);
  } else if (GenderY == userGender[1].value) {
    return assignFemaleAkan(femaleRadio,calculateDay);
  } else {
    return "INVALID";
  }
};

function weekDay(notDay) {
  switch (notDay) {
    case 0:
      return dayOfWeek[0];
      break;
    case 1:
      return dayOfWeek[1];
    case 2:
      return dayOfWeek[2];
      break;
    case 3:
      return dayOfWeek[3];
      break;
    case 4:
      return dayOfWeek[4];
      break;
    case 5:
      return dayOfWeek[5];
      break;
    case 6:
      return dayOfWeek[6];
      break;
    default:
      return "INVALID DAY";
  }
}
