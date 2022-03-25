

let unsubscribeBtn = document.querySelector('#unsubscribeBtn');
let subscribeBtn = document.querySelector('#subscribeBtn');

document.addEventListener("DOMContentLoaded", initialCheck);

function initialCheck() {
    if (localStorage.getItem("name") === null) {
        subscribeBtn.style.visibility = 'visible';
        unsubscribeBtn.style.visibility = 'hidden';
    }
    else {
        subscribeBtn.style.visibility = 'hidden';
        unsubscribeBtn.style.visibility = 'visible';
    }
}


function subscribe() {
    console.log("before anything change");
    let name = document.querySelector('#nameKey').value
    let email = document.querySelector('#emailKey').value

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
 
    subscribeBtn.style.visibility = 'hidden';
    unsubscribeBtn.style.visibility = 'visible';
  
}

    
function unsubscribe() {

    localStorage.removeItem("name");
    localStorage.removeItem("email");

    subscribeBtn.style.visibility = 'visible';
    unsubscribeBtn.style.visibility = 'hidden';
 
}




