const popup = document.getElementById("popup");
const video = document.getElementById("video");
const closeBtn = document.getElementById("closeBtn");

document.querySelectorAll(".play-btn").forEach(button => {
    button.addEventListener("click", () => {
        const trailerUrl = button.getAttribute("data-trailer");

        // Set the video source dynamically based on which button was clicked
        video.src = trailerUrl;
        video.currentTime = 0;

        popup.style.display = "flex";
        video.play();
    });
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
    video.pause();
    video.src = ""; // Release the video resource
});

// Close popup when clicking outside the content box
popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
        video.pause();
        video.src = "";
    }
});