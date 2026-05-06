// javascipt of responsive navigation menu

const menuBtn = document.querySelector(".manu-btn");
const navbar = document.querySelector(".navbar");
menuBtn.addEventListener("click", () =>{
    menuBtn.classList.toggle("active")
    navbar.classList.toggle("active")
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".image-slide");
const contents = document.querySelectorAll(".content-container");

var sliderNav = function(manual){
    btns.forEach((btn) =>{
        btn.classList.remove("active")
    });

     slides.forEach((slide) =>{
    slide.classList.remove("active")
    });

    contents.forEach((content) =>{
        content.classList.remove("active")
    });
    
    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn,i) => {
    btn.addEventListener("click", () =>{
        sliderNav(i);
    });
});


// document.getElementById("myForm").addEventListener("submit",  function(event){
//     let name = document.getElementById("name").value.trim();
//     let email = document.getElementById("email").value.trim();
//     let number = document.getElementById("number").value;
//     let message = document.getElementById("message").value;
//     // Name check
//     if(name === ""){
//         alert("Name is required!");
//         event.preventDefault(); // Stop form submission
//         return;
//     }

//     // Email check (basic pattern)
//     let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//     if(!email.match(emailPattern)){
//         alert("Enter a valid email!");
//         event.preventDefault();
//         return;
//     }

//     // Password check
//     if(number.length < 10){
//         alert("Number must be at least 10 digit!");
//         event.preventDefault();
//         return;
//     }

//     if(message === ""){
//          alert("Name is required!");
//         event.preventDefault(); // Stop form submission
//         return;
//     }
// });


  console.log("Script is running...");

  fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
      console.log("Navbar loaded!");
      document.getElementsByClassName("section-navbar").innerHTML = data;
    })
    .catch(err => console.error("Error loading navbar:", err));
