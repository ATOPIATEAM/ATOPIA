const primaryNav = document.querySelector('ul.primary-navigation')
const navToggle = document.querySelector('.mobile-nav-toggle')

navToggle.addEventListener('click', () => {

    const visibility = primaryNav.getAttribute("data-visible");

    if(visibility === "false"){
        primaryNav.setAttribute('data-visible', true);    
    }
    else if(visibility === "true"){
        primaryNav.setAttribute("data-visible", false);
    }
console.log('true')

})