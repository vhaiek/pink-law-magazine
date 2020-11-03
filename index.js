/*INPUT EVENTS*/
/*INPUT NAME**/
var inputName = (document.getElementById("name"));
var errorMessage = (document.getElementsByClassName("error"));
var errorName = false;

function nameEvent (event) {
  var value = event.target.value;
  
  if ((value.length < 6)||(!value.includes(" "))) {
    errorMessage[0].style.display = "block";
    errorMessage[0].style.color = "red";
    errorMessage[0].style.fontSize = "14px";
    errorName = true;
  }else {errorName = false;}
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
var errorEmail = false;

function emailEvent (event) {
  var value = event.target.value;

  if ((value.includes(" "))||(!value.includes("@"))) {
    errorMessage[1].style.display = "block";
    errorMessage[1].style.color = "red";
    errorMessage[1].style.fontSize = "14px";
    errorEmail = true;
  }else {errorEmail = false;}
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
var errorPassword = false;

function passwordEvent (event) {
  var value = event.target.value;
  var regularPhrase = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
  	
  if ((value.length < 8) || (!regularPhrase.test(value))){
    errorMessage[2].style.display = "block";
    errorMessage[2].style.color = "red";
    errorMessage[2].style.fontSize = "14px";
    errorPassword = true;
  }else {errorPassword = false;}
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
var errorRepeat = false;

function repeatEvent (event) {
  var value = event.target.value;

  if (value !== inputPassword.value) {
    errorMessage[3].style.display = "block";
    errorMessage[3].style.color = "red";
    errorMessage[3].style.fontSize = "14px";
    errorRepeat = true;
  }else {errorRepeat = false;}
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
var errorAge = false;

function ageEvent (event) {
  var value = event.target.value;
  value = Number(value)

  if ((Number.isInteger(value)) && (value >= 18)) {
  errorAge = false;
  }else{
    errorMessage[4].style.display = "block";
    errorMessage[4].style.color = "red";
    errorMessage[4].style.fontSize = "14px";
    errorAge = true;
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
var errorTel = false;

function telephoneEvent (event) {
  var value = event.target.value;

  if ((value.includes("("))||(value.includes("("))||(value.includes("-"))||(value.length < 7)) {
    errorMessage[5].style.display = "block";
    errorMessage[5].style.color = "red";
    errorMessage[5].style.fontSize = "14px";
    errorTel = true;
  }else {errorTel = false;}
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
var errorAdress = false;

function adressEvent (event) {
  var value = event.target.value;
  var regularPhrase = /^[A-Za-z0-9\s]+$/g;

  if ((!regularPhrase.test(value))||(value.length < 5)||(!value.includes(" "))){
  errorMessage[6].style.display = "block";
  errorMessage[6].style.color = "red";
  errorMessage[6].style.fontSize = "14px";
  errorAdress = true;
  }else {errorAdress = false;}
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
var errorCity = false

function cityEvent (event) {
  var value = event.target.value;

  if (value.length < 3) {
    errorMessage[7].style.display = "block";
    errorMessage[7].style.color = "red";
    errorMessage[7].style.fontSize = "14px";
    errorCity = true;
  }else {errorCity = false;}
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
var errorPostcode = false;

function postcodeEvent (event) {
  var value = event.target.value;

  if (value.length < 3) {
    errorMessage[8].style.display = "block";
    errorMessage[8].style.color = "red";
    errorMessage[8].style.fontSize = "14px";
    errorPostcode = true;
  }else {errorPostcode = false;}
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
var errorDni = false;

function dniEvent (event) {
  var value = event.target.value;
  var onlyNumbers = /^[0-9]+$/;
    
  if ((value.length <= 6)||(value.length >= 9)||(!onlyNumbers.test(value))) {
    errorMessage[9].style.display = "block";
    errorMessage[9].style.color = "red";
    errorMessage[9].style.fontSize = "14px";
    errorDni = true;
  }else {errorDni = false;}
}
inputDni.addEventListener("blur", dniEvent);

function dniEvent2 (event) {
  var value = event.target.value;
  
  if (event.target){
  errorMessage[9].style.display = "none";
  }
}
inputDni.addEventListener("focus", dniEvent2); 

/*BUTTON EVENTS*/
var button = (document.getElementById("btn"));

function btnEvent (event) {
  if (errorName === true) {
  alert (errorMessage[0].innerHTML)
  }else if (errorEmail === true) {
  alert (errorMessage[1].innerHTML)
  }else if (errorPassword === true) {
  alert (errorMessage[2].innerHTML)
  }else if (errorRepeat === true) {
  alert (errorMessage[3].innerHTML)
  }else if (errorAge === true) {
  alert (errorMessage[4].innerHTML)
  }else if (errorTel === true) {
  alert (errorMessage[5].innerHTML)
  }else if (errorAdress === true) {
  alert (errorMessage[6].innerHTML)
  }else if (errorCity === true) {
  alert (errorMessage[7].innerHTML)
  }else if (errorPostcode === true) {
  alert (errorMessage[8].innerHTML)
  }else if (errorDni === true) {
  alert (errorMessage[9].innerHTML)
  }else{
  var valueName = inputName.value;
  var valueEmail = inputEmail.value;
  var valuePassword = inputPassword.value;
  var valueRepeat = inputRepeat.value;
  var valueAdress = inputAdress.value;
  var valueAge = inputAge.value;
  var valuePostcode = inputPostcode.value;
  var valueCity = inputCity.value;
  var valueDni = inputDni.value;
  var stringValues = valueName+(" ")+valueEmail+(" ")+valuePassword+(" ")+valueRepeat+(" ")+valueAdress+(" ")+valueAge+(" ")+valuePostcode+(" ")+valueCity+(" ")+valueDni;
  alert (stringValues);
  }
}
button.addEventListener("click", btnEvent);

/*TITLE EVENT*/
var title = (document.getElementById("title"));

function titleEvent(e) {
  title.textContent = ("Hi ")+e.target.value;
}

inputName.addEventListener("keyup", titleEvent);
