document
  .querySelector(".nav")
  .addEventListener("click", function(event, pageName) {
    const tabcontent = document.querySelectorAll(".tabcontent");
    const tablinks = document.querySelectorAll(".nav-link");
    pageName = event.target.getAttribute("value");
    tabcontent.forEach(element => {
      element.style.display = "none";
    });

    tablinks.forEach(element => {
      element.classList.remove("active");
    });

    document.getElementById(pageName).style.display = "block";
    event.target.classList.add("active");
  });

document.getElementById("default").click();

window.addEventListener("scroll", function() {
  let navbar = document.querySelector(".nav");
  const num = 20;

  if (window.pageYOffset >= num) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
