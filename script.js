document.addEventListener("DOMContentLoaded", () => {
  const introScreen = document.getElementById("intro-screen");
  const introTitle = document.getElementById("introTitle");
  const signInBtn = document.getElementById("signInBtn");
  const mainWebsite = document.getElementById("main-website");

  // Initially hide title and button
  introTitle.style.opacity = "0";
  signInBtn.style.opacity = "0";
  signInBtn.style.pointerEvents = "none";

  // Show REPUBLIC RT after 1 second
  setTimeout(() => {
    introTitle.style.opacity = "1";
  }, 1000);

  // Show SIGN IN button after 2 seconds
  setTimeout(() => {
    signInBtn.style.opacity = "1";
    signInBtn.style.pointerEvents = "auto";
  }, 2000);

  // Open website when SIGN IN is clicked
  signInBtn.addEventListener("click", () => {
    introScreen.classList.add("intro-hide");

    setTimeout(() => {
      mainWebsite.classList.remove("hidden");
    }, 600);
  });
});
