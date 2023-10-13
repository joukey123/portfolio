const darkmodeBtn = document.getElementById("darkmode");
const projectImges = document.getElementsByClassName("projects__contents-img");
const keywords = document.querySelectorAll(".about__keywords span");
const imgboxs = document.querySelector(".projects__contents-img");
const menubar = document.getElementById("menubar");
const canvas = document.getElementById("keywordCanvas");
const ctx = canvas.getContext("2d");
const header = document.querySelector("header");
const nav = document.getElementById("nav");
const mediaQueryList = matchMedia("screen and (max-width:1000px)");
const adress = document.getElementById("adress");
const contact = adress.querySelector("span:first-child");
const links = adress.querySelectorAll("a");

let isDarkmode = false;
let isMenuClick = true;
let isContactClick = true;
let prevRandom;

const scaleKeywords = () => {
  let random = Math.floor(Math.random() * keywords.length);
  if (random !== prevRandom) {
    keywords[random].animate(
      [
        { transform: "scale(1)" },
        {
          transform: "scale(1.1)",
          color: "var(--font-color)",
          fontWeight: "bold",
        },
        { transform: " scale(1) " },
      ],
      { duration: 3000 }
    );
  } else {
    scaleKeywords();
  }
  prevRandom = random;
};

let intervalID = setInterval(scaleKeywords, 1500);

const handleOffKeywords = () => {
  clearInterval(intervalID);
};
const handleOnKeywords = () => {
  intervalID = setInterval(scaleKeywords, 1500);
};

for (let keyword of keywords) {
  keyword.addEventListener("mouseover", () => {
    clearInterval(intervalID);
    keyword.classList.add("mouseoverKeyword");
  });
  keyword.addEventListener("mouseleave", () => {
    clearInterval(intervalID);
    keyword.classList.remove("mouseoverKeyword");
    handleOnKeywords();
  });
}
const drawColor = () => {
  if (isDarkmode === false) {
    ctx.strokeStyle = "rgba(0,0,0,0.1)";
    ctx.shadowColor = "rgb(41, 79, 153,0.3)";
    ctx.shadowBlur = 15;
  } else {
    ctx.strokeStyle = "rgba(237,178,65,0.6)";
    ctx.shadowColor = "rgba(255, 255, 255,0.1)";
    ctx.shadowBlur = 15;
  }
  ctx.clearRect(0, 0, 600, 600);
  drawLine();
};

const drawLine = () => {
  ctx.lineWidth = "0.6";
  ctx.moveTo(200, 120);
  ctx.lineTo(138, 195);
  //2
  ctx.moveTo(125, 225);
  ctx.lineTo(100, 300);
  //3
  ctx.moveTo(100, 355);
  ctx.lineTo(160, 425);
  //4
  ctx.moveTo(175, 455);
  ctx.lineTo(245, 510);
  //5
  ctx.moveTo(290, 520);
  ctx.lineTo(450, 465);
  //6
  ctx.moveTo(460, 435);
  ctx.lineTo(500, 290);
  //7
  ctx.moveTo(500, 255);
  ctx.lineTo(470, 165);
  //8
  ctx.moveTo(450, 135);
  ctx.lineTo(360, 110);
  //9
  ctx.moveTo(450, 135);
  ctx.lineTo(360, 110);
  //10
  ctx.moveTo(315, 110);
  ctx.lineTo(230, 110);
  //11
  ctx.moveTo(211, 123);
  ctx.lineTo(246, 180);
  //12
  ctx.moveTo(153, 210);
  ctx.lineTo(216, 192);
  //13
  ctx.moveTo(140, 225);
  ctx.lineTo(184, 327);
  ctx.lineTo(168, 420);
  //14
  ctx.moveTo(191, 440);
  ctx.lineTo(257, 422);
  //15
  ctx.moveTo(277, 438);
  ctx.lineTo(265, 502);
  //16
  ctx.moveTo(303, 422);
  ctx.lineTo(417, 450);
  //17
  ctx.moveTo(303, 422);
  ctx.lineTo(370, 380);
  //18
  ctx.moveTo(422, 348);
  ctx.lineTo(485, 275);
  ctx.lineTo(421, 222);
  //19
  ctx.moveTo(388, 202);
  ctx.lineTo(417, 150);
  //20
  ctx.moveTo(388, 202);
  ctx.lineTo(339, 126);
  ctx.lineTo(276, 182);
  //21
  ctx.moveTo(247, 206);
  ctx.lineTo(184, 327);
  ctx.lineTo(270, 404);
  ctx.lineTo(289, 324);
  //22
  ctx.moveTo(247, 206);
  ctx.lineTo(284, 289);
  //23
  ctx.moveTo(273, 195);
  ctx.lineTo(355, 216);
  //24
  ctx.moveTo(315, 290);
  ctx.lineTo(375, 232);
  //25
  ctx.moveTo(348, 310);
  ctx.lineTo(399, 351);
  //26
  ctx.moveTo(409, 343);
  ctx.lineTo(392, 236);

  ctx.stroke();
};

const handelHeader = () => {
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
  if (document.body.className) {
    isDarkmode = !isDarkmode;
  } else {
    isDarkmode = !isDarkmode;
  }
  drawColor();
};
for (let projectImg of projectImges) {
  const img = projectImg.querySelector("img");
  img.addEventListener("mouseover", () => {
    const imgHeight = img.height;

    img.style.transition = `transform 8s`;
    img.style.transform = `translateY(${-imgHeight + 400}px)`;
  });
  img.addEventListener("mouseleave", () => {
    img.style.transition = `transform 3s`;
    img.style.transform = `translateY(0)`;
  });
}
const handleMenu = () => {
  if (isMenuClick) {
    header.style.animation = "active .3s linear forwards";
    setTimeout(() => {
      nav.style.display = "flex";
      nav.style.marginTop = "40px";
      isMenuClick = !isMenuClick;
    }, 300);
  } else {
    header.style.animation = "inactive .3s linear forwards";
    nav.style.display = "none";
    isMenuClick = !isMenuClick;
  }
};

const handleWindowResize = () => {
  isMenuClick = true; //클릭 초기화
  if (mediaQueryList.matches) {
    nav.style.marginTop = "0px";
    nav.style = "";
    header.style.animation = "";
    contact.classList.add("bounce");
    for (let link of links) {
      link.classList.add("hidden");
    }
  } else {
    contact.classList.remove("bounce");
    for (let link of links) {
      link.classList.remove("hidden");
    }
  }
};

const handleContact = () => {
  if (isContactClick) {
    for (let link of links) {
      link.classList.remove("hidden");
    }
    contact.classList.remove("bounce");
    isContactClick = !isContactClick;
  } else {
    for (let link of links) {
      link.classList.add("hidden");
    }
    contact.classList.add("bounce");
    isContactClick = !isContactClick;
  }
};
drawColor();
scaleKeywords();
handleWindowResize();

contact.addEventListener("click", handleContact);
menubar.addEventListener("click", handleMenu);
window.addEventListener("scroll", handelHeader);
darkmodeBtn.addEventListener("click", handleDarkMode);
window.addEventListener("resize", handleWindowResize);
