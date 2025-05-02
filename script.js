
    const images = [
        "IMG_0797.jpeg",
        "IMG_0804.jpeg",
        "IMG_0889.JPG",
        "IMG_0995.jpeg",
        "IMG_1016.jpeg",
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

