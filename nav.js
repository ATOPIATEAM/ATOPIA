
//responsive nav bar toggle
const primaryNav = document.querySelector('ul#primary-navigation')
const navToggle = document.querySelector('.mobile-nav-toggle')
navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if(visibility === "false"){   
        primaryNav.setAttribute("data-visible", true);    
        navToggle.setAttribute("aria-expanded", true);
    }
    else if(visibility === "true"){
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false)
    }
console.log('true')

})

//budget click color change
function changeColors(clickedElement) {
  var budgetElements = document.querySelectorAll('.budget');
  budgetElements.forEach(function (element) {
      element.classList.remove('clicked');
  });

  clickedElement.classList.toggle('clicked');

  // Set the value of the hidden input field based on the selected budget
  var selectedBudget = clickedElement.querySelector('.budget-range').textContent;
  document.querySelector('#contactForm input[name="selectedBudget"]').value = selectedBudget;
}


//timeline default color 
document.addEventListener('DOMContentLoaded', function () {
  var timelineSelect = document.getElementById('Timeline-3');

  timelineSelect.addEventListener('change', function () {
      if (timelineSelect.value !== "") {
          timelineSelect.classList.add('timeline-selected');
      } else {
          timelineSelect.classList.remove('timeline-selected');
      }
  });
});
