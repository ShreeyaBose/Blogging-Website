document.addEventListener("DOMContentLoaded", function() {
    const contentForm = document.getElementById("content-form");
    const publishedContent = document.getElementById("published-content");

    contentForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const text = document.getElementById("text").value;
        const imageFile = document.getElementById("image").files[0];
        const videoFile = document.getElementById("video").files[0];

        const contentElement = document.createElement("div");
        contentElement.classList.add("content-item");

        if (text) {
            const textElement = document.createElement("p");
            textElement.textContent = text;
            contentElement.appendChild(textElement);
        }

        if (imageFile) {
            const imageElement = document.createElement("img");
            imageElement.src = URL.createObjectURL(imageFile);
            contentElement.appendChild(imageElement);
        }

        if (videoFile) {
            const videoElement = document.createElement("video");
            videoElement.src = URL.createObjectURL(videoFile);
            videoElement.controls = true;
            contentElement.appendChild(videoElement);
        }

        publishedContent.appendChild(contentElement);

        contentForm.reset();
    });
});
