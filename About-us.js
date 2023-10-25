// Wait for DOM load
document.addEventListener('DOMContentLoaded', () => {

    // Select elements
    const upperDiv = document.getElementById('upper-div');
    const lowerDiv = document.getElementById('lower-div');  
  
    // Get upper items
    const upperItems = Array.from(document.querySelectorAll('#upper-div .item'));
  
    // Get third upper item  
    const thirdItem = upperItems[2];
  
    // Calculate spacing  
    const thirdItemStart = thirdItem.offsetLeft;
    const spacing = thirdItemStart - 20;
    const spacingPct = (spacing/upperDiv.offsetWidth) * 100 + "%";
  
    // Select lower items
    const lowerItems = document.querySelectorAll('#lower-div .item');
  
    // Target only second lower item
    const lowerSecondItem = lowerItems[1];
  
    // Apply spacing  
    lowerSecondItem.style.marginLeft = spacingPct;
  
  });