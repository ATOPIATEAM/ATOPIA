function changeColors(clickedElement) {
  // Remove 'clicked' class from all budget elements
  var budgetElements = document.querySelectorAll('.budget');
  budgetElements.forEach(function (element) {
    element.classList.remove('clicked');
  });

  // Toggle 'clicked' class for the clicked element
  clickedElement.classList.toggle('clicked');
}