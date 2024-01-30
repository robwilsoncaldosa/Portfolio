//Contact Form
const form = document.querySelector("form");
const fullName = document.querySelector("#name");
const email = document.querySelector('#email');
const message = document.querySelector('#message');


function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value} <br> Message: ${message.value}`
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "robwilsoncaldoza@gmail.com",
        Password: "DFDA23DE52EF1E0DC0ABB90350BD2EB70E93",
        To: 'robwilsoncaldoza@gmail.com',
        From: "robwilsoncaldoza@gmail.com",
        Subject: "This is the subject",
        Body: bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            }
        });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendEmail();
})


// turn pages when click next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId)

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        } else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }
    }
})


// contact me button when click
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500)
        }, (index + 1) * 200 + 100)
    })
}


// create reverse index function
let totalPages = pages.length;

let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

// back profile button when click

const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');
            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)
        }, (index + 1) * 200 + 100)
    })
}


// opening animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

//opening animation (cover right animation)
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100)

setTimeout(() => {
        coverRight.style.zIndex = -1;
    }, 2800)
    // opening animation (page left  or profile page animation)
setTimeout(() => {

    pageLeft.style.zIndex = 20;
}, 3200)

// opening animation (all page right animation)

pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)
    }, (index + 1) * 200 + 2100)
})

// Function to scroll to the top of the page
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Function to scroll to the top or bottom of the page based on current scroll position
function scrollToTopOrBottom() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll === 0) {
        // Scroll to the element with id "more_projects"
        var moreProjectsElement = document.getElementById('more_projects');

        if (moreProjectsElement) {
            // For Safari
            document.body.scrollTop = moreProjectsElement.offsetTop;

            // For Chrome, Firefox, IE, and Opera
            document.documentElement.scrollTop = moreProjectsElement.offsetTop;
        }
    } else {
        // Scroll to the top
        scrollToTop();
    }
}

// Show/hide the scroll-to-top button and toggle arrow icon
window.onscroll = function() {
    var btn = document.getElementById('scrollToTopBtn');
    var icon = btn.querySelector('i');

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = 'flex';
        icon.classList.remove('bxs-down-arrow-alt');
        icon.classList.add('bxs-up-arrow-alt');
    } else {
        icon.classList.remove('bxs-up-arrow-alt');
        icon.classList.add('bxs-down-arrow-alt');
    }
};

// Add click event listener to the scroll-to-top button
document.getElementById('scrollToTopBtn').addEventListener('click', scrollToTopOrBottom);

// Scroll to the top when the page is loaded
window.onload = scrollToTop;