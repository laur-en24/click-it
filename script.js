
    const images = [
        "img1.jpeg",
        "img2.jpeg",
        "img3.JPG",
        "img4.jpeg",
        "img5.jpeg",
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

