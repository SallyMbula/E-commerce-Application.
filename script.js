const firebaseConfig = {
    apiKey: "AIzaSyA0P2bmkpzaibARSwH-alwTK6P8Ca_JqW4",
    authDomain: "omnia-jewelry-project-ac18e.firebaseapp.com",
    databaseURL: "https://omnia-jewelry-project-ac18e-default-rtdb.firebaseio.com",
    projectId: "omnia-jewelry-project-ac18e",
    storageBucket: "omnia-jewelry-project-ac18e.appspot.com",
    messagingSenderId: "99028678943",
    appId: "1:99028678943:web:8f6dcd9f79b512df69182a",
    measurementId: "G-FEEZSJYNC6"
  };

  firebase.initializeApp(firebaseConfig);

 var contactDB =firebase.database().ref('contact');
 document.getElementById("contact").addEventListener("SEND", send-btn);

 function submitForm(e) {
    e.preventDefault();
}

var Message = getElementVal('Message');
var Name = getElementVal('Name');
var Email = getElementVal('Email');
var Subject = getElementVal('Subject');

saveMessages(Name, Emailid, Message);

const saveMessages = (Name, Emailid, Message) => {
var newContact = contactDB.push();

newContact.set({
    Name: Name,
    Emailid: Emailid,
    Message: Message,
})
};
const getElementVal = (id) => {
    return document.getElementById(id).Value;
}
 

window.onscroll = function() {myfunction()}


var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;

function myfunction(){
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
    
}

let menu = document.querySelector('#menuBar');
let navbar = document.querySelector('#navmenu');

menu.onclick = () => {
    navbar.classList.toggle('open');
};
