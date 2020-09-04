const toggleSwitch = document.querySelector('input[type=checkbox]');
const nav = document.getElementById('myTopNav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image5 = document.getElementById('image5');
const image6 = document.getElementById('image6');
const imageContainer1 = document.getElementById('image-container1');
const imageContainer2 = document.getElementById('image-container2');
const imageContainer3 = document.getElementById('image-container3');
const imageContainer4 = document.getElementById('image-container4');
const imageContainer5 = document.getElementById('image-container5');
const imageContainer6 = document.getElementById('image-container6');
const textBox = document.getElementById('text-box');


// helper array
const imageContainerItems = [imageContainer1, imageContainer2, imageContainer3,
    imageContainer4, imageContainer5, imageContainer6];

// Control Navigation Animation helper method
function navAnimation(direction1, direction2) {

    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
    });
}








// Dark or Light Images
function imageMode(color) {

    // images
    image1.src = `img/undraw_Freelancer_re_irh4-${color}.svg`;
    image2.src = `img/undraw_adventure_4hum-${color}.svg`;
    image3.src = `img/undraw_exploring_1l7f-${color}.svg`;
    image4.src = `img/undraw_Mobile_application_mr4r-${color}.svg`;
    image5.src = `img/undraw_relaunch_day_902d-${color}.svg`;
    image6.src = `img/undraw_refreshing_beverage_td3r-${color}.svg`;

    if (color === 'dark') {

        // image backgrounds
        // imageContainer1.style.backgroundColor = 'rgb(10 10 10 / 95%)';
        // imageContainer2.style.backgroundColor = 'rgb(10 10 10 / 95%)';
        // imageContainer3.style.backgroundColor = 'rgb(10 10 10 / 95%)';
        // imageContainer4.style.backgroundColor = 'rgb(10 10 10 / 95%)';
        // imageContainer5.style.backgroundColor = 'rgb(10 10 10 / 95%)';
        // imageContainer6.style.backgroundColor = 'rgb(10 10 10 / 95%)';
        imageContainerItems.forEach((imgCon) => {

            imgCon.style.backgroundColor = 'rgb(10 10 10 / 95%)';

        });

    } else {

        // imageContainer1.style.backgroundColor = 'rgb(255 255 255)';
        // imageContainer2.style.backgroundColor = 'rgb(255 255 255)';
        // imageContainer3.style.backgroundColor = 'rgb(255 255 255)';
        // imageContainer4.style.backgroundColor = 'rgb(255 255 255)';
        // imageContainer5.style.backgroundColor = 'rgb(255 255 255)';
        // imageContainer6.style.backgroundColor = 'rgb(255 255 255)';
        imageContainerItems.forEach((imgCon) => {

            imgCon.style.backgroundColor = 'rgb(255 255 255)';

        });
    }

}
// Dark Mode Styles
function darkMode() {

    nav.style.backgroundColor = 'rgb(0 0 0 / 30%)';
    textBox.style.backgroundColor = 'rgb(10 10 10 / 50%)';
    textBox.style.color = 'whitesmoke';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');

    imageMode('dark');

}

// Light Mode Styles
function lightMode() {

    nav.style.backgroundColor = 'rgb(255 255 255 / 90%)';
    textBox.style.backgroundColor = 'rgb(255, 255, 255)';
    textBox.style.color = '#000';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');

    imageMode('light');


}

// Switch Dark/Light theme dynamically
function switchTheme(event) {

    if (event.target.checked) {

        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();


    } else {

        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();


    }

}

// Dark Mode Event Listener for toggle
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage for Saved Light/Dark Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {

    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {

        toggleSwitch.checked = true;
        darkMode();
    }


}



/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function expandNav() {

    // collapsible nav in mobile
    var x = document.getElementById("myTopNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }

    // drop dark mode toggle when nav expands in mobile
    var x = document.getElementById("darkmode");
    if (x.className === "theme-switch-wrapper") {
        x.className += " responsive";
    } else {
        x.className = "theme-switch-wrapper";
    }
}