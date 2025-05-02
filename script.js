
    const images = [
        "images/IMG_0797.jpeg",
        "images/IMG_0804.jpeg",
        "images/IMG_0889.JPG",
        "images/IMG_0995.jpeg",
        "images/IMG_1016.jpeg",
    ];

    let currentIndex = 0;

    function showNextImage() {
      const img = document.getElementById("display-img");

        img.src = images[currentIndex];
        img.alt = "Image";
    img.style.maxWidth = "300px";
    img.style.maxHeight = "300px";

        currentIndex++;

if (currentIndex >= images.length) {
            currentIndex = 0;
  
        }
    }

