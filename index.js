/*INPUT NAME**/
var inputName = (document.getElementById("name"));
var errorMessage = (document.getElementsByClassName("error"));

function nameEvent (event) {
    var value = event.target.value;
  
    if ((value.length < 6)||(!value.includes(" "))) {
        errorMessage[0].style.display = "block";
        errorMessage[0].style.color = "red";
        errorMessage[0].style.fontSize = "14px";
    }
  }
  inputName.addEventListener("blur", nameEvent);

function nameEvent2 (event) {
    var value = event.target.value;

    if (event.target){
    errorMessage[0].style.display = "none";
    }
  }
  inputName.addEventListener("focus", nameEvent2);


/*INPUT EMAIL**/
var inputEmail = (document.getElementById("email"));

function emailEvent (event) {
    var value = event.target.value;

    if ((value.includes(" "))||(!value.includes("@"))) {
        errorMessage[1].style.display = "block";
        errorMessage[1].style.color = "red";
        errorMessage[1].style.fontSize = "14px";
    }
  }
  inputEmail.addEventListener("blur", emailEvent);

function emailEvent2 (event) {
    var value = event.target.value;

    if (event.target){
    errorMessage[1].style.display = "none";
    }
  }
  inputEmail.addEventListener("focus", emailEvent2);

/*INPUT PASSWORD*/
var inputPassword = (document.getElementById("password"));

function passwordEvent (event) {
  var value = event.target.value;
  var regularPhrase = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
  	
  if ((value.length < 8) || (!regularPhrase.test(value))){
    errorMessage[2].style.display = "block";
    errorMessage[2].style.color = "red";
    errorMessage[2].style.fontSize = "14px";
  }
}
inputPassword.addEventListener("blur", passwordEvent);

function passwordEvent2 (event) {
  var value = event.target.value;

  if (event.target){
  errorMessage[2].style.display = "none";
  }
}
inputPassword.addEventListener("focus", passwordEvent2);

/*INPUT REPEAT PASSWORD*/
var inputRepeat = (document.getElementById("repeat-password"));

function repeatEvent (event) {
    var value = event.target.value;

    if (value !== inputPassword.value) {
      errorMessage[3].style.display = "block";
      errorMessage[3].style.color = "red";
      errorMessage[3].style.fontSize = "14px";
    }
  }
  inputRepeat.addEventListener("blur", repeatEvent);
  
function repeatEvent2 (event) {
  var value = event.target.value;

  if (event.target){
  errorMessage[3].style.display = "none";
  }
}
inputRepeat.addEventListener("focus", repeatEvent2);

/*INPUT AGE*/
var inputAge = (document.getElementById("age"));

function ageEvent (event) {
    var value = event.target.value;
    value = Number(value)

  if ((Number.isInteger(value)) && (value >= 18)) {
  }else{
    errorMessage[4].style.display = "block";
    errorMessage[4].style.color = "red";
    errorMessage[4].style.fontSize = "14px";
    }
  }
inputAge.addEventListener("blur", ageEvent);
   
function ageEvent2 (event) {
  var value = event.target.value;

  if (event.target){
  errorMessage[4].style.display = "none";
  }
}
inputAge.addEventListener("focus", ageEvent2); 
  
/*INPUT TELEPHONE NUMBER*/
var inputTelephone = (document.getElementById("telephone"));

function telephoneEvent (event) {
    var value = event.target.value;

    if ((value.includes("("))||(value.includes("("))||(value.includes("-"))||(value.length < 7)) {
        errorMessage[5].style.display = "block";
        errorMessage[5].style.color = "red";
        errorMessage[5].style.fontSize = "14px";
    }
  }
  inputTelephone.addEventListener("blur", telephoneEvent);

function telephoneEvent2 (event) {
    var value = event.target.value;
  
    if (event.target){
    errorMessage[5].style.display = "none";
    }
  }
  inputTelephone.addEventListener("focus", telephoneEvent2); 

/*INPUT ADRESS*/
var inputAdress = (document.getElementById("adress"));

function adressEvent (event) {
    var value = event.target.value;
    var regularPhrase = /^[A-Za-z0-9\s]+$/g;

    if ((!regularPhrase.test(value))||(value.length < 5)||(!value.includes(" "))){
    errorMessage[6].style.display = "block";
    errorMessage[6].style.color = "red";
    errorMessage[6].style.fontSize = "14px";
    }
  }
  inputAdress.addEventListener("blur", adressEvent);

function adressEvent2 (event) {
    var value = event.target.value;
  
    if (event.target){
    errorMessage[6].style.display = "none";
    }
  }
  inputAdress.addEventListener("focus", adressEvent2); 

/*INPUT CITY*/
var inputCity = (document.getElementById("city"));

function cityEvent (event) {
    var value = event.target.value;

    if (value.length < 3) {
        errorMessage[7].style.display = "block";
        errorMessage[7].style.color = "red";
        errorMessage[7].style.fontSize = "14px";
    }
  }
  inputCity.addEventListener("blur", cityEvent);

function cityEvent2 (event) {
    var value = event.target.value;
  
    if (event.target){
    errorMessage[7].style.display = "none";
    }
  }
  inputCity.addEventListener("focus", cityEvent2); 

/*INPUT POSTCODE*/ 
var inputPostcode = (document.getElementById("postcode"));

function postcodeEvent (event) {
    var value = event.target.value;

    if (value.length < 3) {
        errorMessage[8].style.display = "block";
        errorMessage[8].style.color = "red";
        errorMessage[8].style.fontSize = "14px";
    }
  }
  inputPostcode.addEventListener("blur", postcodeEvent);

function postcodeEvent2 (event) {
    var value = event.target.value;
  
    if (event.target){
    errorMessage[8].style.display = "none";
    }
  }
  inputPostcode.addEventListener("focus", postcodeEvent2); 
   
/*INPUT DNI*/ 
var inputDni = (document.getElementById("dni"));

function dniEvent (event) {
    var value = event.target.value;
    var onlyNumbers = /^[0-9]+$/;
    
  if ((value.length <= 6)||(value.length >= 9) || (!onlyNumbers.test(value))) {
    errorMessage[9].style.display = "block";
    errorMessage[9].style.color = "red";
    errorMessage[9].style.fontSize = "14px";
   }
  }
  inputDni.addEventListener("blur", dniEvent);

function dniEvent2 (event) {
    var value = event.target.value;
  
    if (event.target){
    errorMessage[9].style.display = "none";
    }
  }
  inputDni.addEventListener("focus", dniEvent2); 

/*BUTTON*/
var button = (document.getElementById("btn"));

function btnEvent (event) {
var valueName = inputName.value;
var valueEmail = inputEmail.value;
var valuePassword = inputPassword.value;
var valueRepeat = inputRepeat.value;
var valueAdress = inputAdress.value;
var valueAge = inputAge.value;
var valuePostcode = inputPostcode.value;
var valueCity = inputCity.value;
var valueDni = inputDni.value;

console.log(valueName);
}
button.addEventListener("click", btnEvent)
