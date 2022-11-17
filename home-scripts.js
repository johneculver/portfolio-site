//Allows "Read My Story" button to navigate users to Story page when clicked

const storyButton = document.getElementById("story-button");

storyButton.addEventListener("click", goToStory);

function goToStory () {
    window.location.href = './story.html';
}