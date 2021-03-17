// container for both the sign in form and the deposit form
var container = document.querySelector('#container');
// the input box of deposit form
document.querySelector("#depositAmount").value = "";
var depositForm = document.querySelector('#depositForm');
var signInBtn = document.querySelector("#signIn");
var balance = document.querySelector('#balance');
var depositBtn = document.querySelector("#deposit");
var signOutBtn = document.querySelector("#signOut");
depositBtn.addEventListener('click', deposit);
// user is logged in
isLoggedIn();

signInBtn.addEventListener('click', function(){
  // get username
    var username = document.querySelectorAll('[type="name"]')[0].value;
    // get password
    var password = document.querySelectorAll('[type="password"]')[0].value;
	  document.cookie = "username=" + username;
    document.cookie = "password=" + password;
    document.cookie = "balance=0.00";
    isLoggedIn();
  })

function isLoggedIn(){
  if(getCookie("username") != ""){
    document.querySelector("#welcome-msg").innerText = "Welcome " + getCookie("username");
    container.style.display = "none";
    depositForm.style.display = "block";
    balance.innerText = getCookie("balance");
    signOutBtn.style.visibility = "visible";
  }
  else depositForm.style.display = "none";
}


function signOut(){
  document.cookie = "username=";
  document.cookie = "password=";
  document.cookie = "balance=0.00";
  document.cookie = "balance=0.00";
  container.style.display = "block";
  document.querySelector("#welcome-msg").innerText = "Welcome to E-banking"
  depositForm.style.display = "none";
}

function deposit(){
  var depositAmount;
  var initialBalance = parseFloat(getCookie("balance"));
  var amountInp = document.querySelector("#depositAmount");
  if(amountInp.value == "" | parseFloat(amountInp.value) < 0){
    depositAmount = 0.00;
  }
  else depositAmount = parseFloat(amountInp.value);
  document.cookie = "balance=" + (depositAmount + initialBalance);
  balance.innerText = getCookie("balance");
  amountInp.value = "";
  alert("Deposit of " + depositAmount + " Ghs made.");
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

