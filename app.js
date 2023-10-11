const darkmodeBtn = document.getElementById("darkmode");
const projectImges = document.getElementsByClassName("projects__contents-img");
const handelHeader = () => {
  const header = document.querySelector("header");

  const scrollY = window.scrollY;
  if (scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};

const handleDarkMode = () => {
  darkmodeBtn.classList.toggle("active");
  document.body.classList.toggle("darkmode");
};

for (let projectImg of projectImges) {
  const img = projectImg.querySelector("img");
  const imgHeight = img.height;
  img.addEventListener("mouseover", () => {
    img.style.transition = `transform 10s`;
    img.style.transform = `translateY(${-imgHeight + 400}px)`;
  });
  img.addEventListener("mouseleave", () => {
    img.style.transition = `transform 3s`;
    img.style.transform = `translateY(0)`;
  });
}

window.addEventListener("scroll", handelHeader);
darkmodeBtn.addEventListener("click", handleDarkMode);
