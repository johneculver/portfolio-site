const storyButton = document.getElementById("story-button");

storyButton.addEventListener("click", goToStory);

function goToStory () {
    window.location.href = './story.html';
}
