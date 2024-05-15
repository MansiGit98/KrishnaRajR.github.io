const nav = document.querySelector("nav");

const fixNav = () => {
  if (window.scrollY > nav.offsetHeight + 150) nav.classList.add("active");
  else nav.classList.remove("active");
};

window.addEventListener("scroll", fixNav);

function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
};

function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
};

document.getElementById('filterDropdown').addEventListener('change', function() {
  var selectedOption = this.value;
  var listItems = document.querySelectorAll('.public');

  listItems.forEach(function(item) {
    item.style.display = 'none';
    if (selectedOption === 'all' || item.classList.contains(selectedOption)) {
      item.style.display = 'block';
    }
  });
});

document.getElementById('dateDropdown').addEventListener('change', function() {
  var selectedOption = this.value;
  var listItems = document.querySelectorAll('.public');

  listItems.forEach(function(item) {
    item.style.display = 'none';
    if (selectedOption === 'all' || item.classList.contains(selectedOption)) {
      item.style.display = 'block';
    }
  });
});

function filterStudents1() {
  var dropdown = document.getElementById("studentDropdown1");
  var selectedOption = dropdown.value;
  var teamListItems = document.getElementById("teamList1").getElementsByTagName("li");

  for (var i = 0; i < teamListItems.length; i++) {
      teamListItems[i].style.display = "none";
  }

  if (selectedOption === "all") {
      for (var i = 0; i < teamListItems.length; i++) {
          teamListItems[i].style.display = "block";
      }
  } else {
      var selectedItems = document.getElementsByClassName(selectedOption);
      for (var i = 0; i < selectedItems.length; i++) {
          selectedItems[i].style.display = "block";
      }
  }
};

function filterStudents2() {
  var dropdown = document.getElementById("studentDropdown2");
  var selectedOption = dropdown.value;
  var teamListItems = document.getElementById("teamList2").getElementsByTagName("li");

  for (var i = 0; i < teamListItems.length; i++) {
      teamListItems[i].style.display = "none";
  }

  if (selectedOption === "all") {
      for (var i = 0; i < teamListItems.length; i++) {
          teamListItems[i].style.display = "block";
      }
  } else {
      var selectedItems = document.getElementsByClassName(selectedOption);
      for (var i = 0; i < selectedItems.length; i++) {
          selectedItems[i].style.display = "block";
      }
  }
};

function filterStudents3() {
  var dropdown = document.getElementById("studentDropdown3");
  var selectedOption = dropdown.value;
  var teamListItems = document.getElementById("teamList3").getElementsByTagName("li");

  for (var i = 0; i < teamListItems.length; i++) {
      teamListItems[i].style.display = "none";
  }

  if (selectedOption === "all") {
      for (var i = 0; i < teamListItems.length; i++) {
          teamListItems[i].style.display = "block";
      }
  } else {
      var selectedItems = document.getElementsByClassName(selectedOption);
      for (var i = 0; i < selectedItems.length; i++) {
          selectedItems[i].style.display = "block";
      }
  }
};


function togglePhDStudents1(event) {
  event.preventDefault(); // Prevent default anchor tag behavior
  var jointSupervision = document.getElementById("jointSupervision1");
  var plusImg = document.querySelector(".plus-img1");
  var minusImg = document.querySelector(".minus-img1"); 
  if (jointSupervision.style.display === "none") {
      jointSupervision.style.display = "block";
      plusImg.style.display = "none"; 
      minusImg.style.display = "inline-block";
  } else {
      jointSupervision.style.display = "none";
      plusImg.style.display = "inline-block";
      minusImg.style.display = "none";
  }
};

function togglePhDStudents2(event) {
  event.preventDefault(); // Prevent default anchor tag behavior
  var jointSupervision = document.getElementById("jointSupervision2");
  var plusImg = document.querySelector(".plus-img2");
  var minusImg = document.querySelector(".minus-img2"); 
  if (jointSupervision.style.display === "none") {
      jointSupervision.style.display = "block";
      plusImg.style.display = "none"; 
      minusImg.style.display = "inline-block";
  } else {
      jointSupervision.style.display = "none";
      plusImg.style.display = "inline-block";
      minusImg.style.display = "none";
  }
};

function togglePhDStudents3(event) {
  event.preventDefault(); // Prevent default anchor tag behavior
  var jointSupervision = document.getElementById("jointSupervision3");
  var plusImg = document.querySelector(".plus-img3");
  var minusImg = document.querySelector(".minus-img3"); 
  if (jointSupervision.style.display === "none") {
      jointSupervision.style.display = "block";
      plusImg.style.display = "none"; 
      minusImg.style.display = "inline-block";
  } else {
      jointSupervision.style.display = "none";
      plusImg.style.display = "inline-block";
      minusImg.style.display = "none";
  }
};

