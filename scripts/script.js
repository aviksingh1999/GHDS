// slideshow.js

document.addEventListener("DOMContentLoaded", function () {
    const imageFilenames = [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
    ];

    const carousel = document.getElementById("carousel");

    function createSlideshow() {
        imageFilenames.forEach((filename, index) => {
            const image = document.createElement("img");
            image.src = `assets/carousel/${filename}`;
            image.classList.add("slideshow-image");

            if (index === 0) {
                image.style.display = "block";
            }

            carousel.appendChild(image);
        });

        let currentIndex = 0;

        function nextImage() {
            const images = document.getElementsByClassName("slideshow-image");

            if (images.length === 0) return;

            images[currentIndex].style.display = "none";
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].style.display = "block";
        }

        setInterval(nextImage, 3000);
    }

    createSlideshow();
});


// Open popup function
function openPopup(contentID, containerID) {
    fetch(`pages/${contentID}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerID).innerHTML = data;
        });

    document.getElementById(containerID).style.display = "block";
}

// Close popup function
function closePopup(containerID) {
    document.getElementById(containerID).style.display = "none";
}

// Add event listener to close button
document.addEventListener('DOMContentLoaded', function () {
    const closeButton = document.querySelector('.closeButton');
    if (closeButton) {
        closeButton.addEventListener('click', function () {
            closePopup('popupContainer');
        });
    }
});

