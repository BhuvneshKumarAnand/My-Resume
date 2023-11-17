// Animation at the start 

var i = 0;
var txt = 'A highly inquisitive engineer with a penchant for intellectual exploration, possessing strong problem-solving and analytical skills. Grounded in a solid foundation of Java and C++, I am actively seeking opportunities in Front-End Development and Web Development, among other domains.';
var speed = 10;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Call the function after the page loads
window.onload = function() {
    typeWriter();
};

// Smooth Scroll 

var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');

// console.log(navMenuAnchorTags);

for (var j = 0; j < navMenuAnchorTags.length; j++) {
    navMenuAnchorTags[j].addEventListener('click', function(event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSectionID);

        var interval = setInterval(function() {
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if (targetSectionCoordinates.top <= 0) {
                clearInterval(interval);
                return;
            }
            window.scrollBy(0, 50);
        }, 20);
    });
}

// Animation on skills bar

// var progressBars = document.querySelector('.skill-progress > div');;
// var skillsContainer = document.getElementById('skills-container');
// window.addEventListener('scroll', checkScroll);
// var animationDone = false;

// function initialiseBar() {
//     for (let bar of progressBars) {
//         bar.style.width = 0 + '%';
//     }
// }

// initialiseBar();

// function fillBars() {
//     for (let bar of progressBars) {
//         // for (let i = 0; i < progressBars.length; i++) {
//         let targetWidth = bar.getAttribute('data-bar-width');
//         let currentWidth = 0;
//         let interval = setInterval(function() {
//             if (currentWidth > targetWidth) {
//                 clearInterval(interval);
//                 return;
//             }
//             currentWidth++;
//             bar.style.width = currentWidth + '%';
//         }, 5);
//     }
// }

// function checkScroll() {
//     // you have to check whether the skill container is visible
//     var coordinates = skillsContainer.getBoundingClientRect();
//     if (!animationDone && coordinates.top <= window.innerHeight) {
//         animationDone = true;
//         console.log('Skills Section is visible');
//         fillBars();
//     }
// }

var progressBars = document.querySelectorAll(".skill-progress > div");



function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function() {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}



window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);

