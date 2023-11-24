const gnbMenuList = document.querySelectorAll(".nav-list a");
const gnbContentList = document.querySelectorAll(".categories");
const gnbSlider = document.querySelector(".category-wrapper");

// 모바일네비
const mobileOpen = document.querySelector(".nav-mobiletrigger");
const mobileClose = document.querySelector(".background-close-btn");
const mobilewrapper = document.querySelector(".mobile-menu-wrapper");
const closeArea = document.querySelector(".background-close");

//load시에 sliderHide
window.addEventListener("load", () => {
  mobilewrapper.style.display = "none";
  gnbSlider.style.display = "none";
});

gnbMenuList.forEach((el, idx) => {
  el.addEventListener("mouseenter", () => {
    gnbSlider.style.display = "flex";
    gnbSlider.style.animation = "slideDown 0.3s linear both";

    gnbContentList.forEach((content, num, arr) => {
      console.log(content);
      // content.style.display = "block";
      arr[idx].style.display = "block";
      arr.forEach((e, n) => {
        if (idx !== n) {
          e.style.display = "none";
        }
      });
    });
  });
});

gnbSlider.addEventListener("mouseleave", () => {
  gnbSlider.style.animation = "slideUp 0.3s linear both";
});

mobileOpen.addEventListener("click", () => {
  mobilewrapper.style.animation = "slideopen 0.5s linear both";
  mobilewrapper.style.display = "flex";
  closeArea.style.display = "flex";
});

mobileClose.addEventListener("click", () => {
  mobilewrapper.style.animation = "slideclose 0.5s linear both";
  closeArea.style.display = "flex";

  setTimeout(() => {
    mobilewrapper.style.display = "none";
  }, 600);
});

// 로그인창
const loginIcon = document.querySelector(".nav-login-icon");
const loginClose = document.querySelector("#login-closebtn");
console.log(loginClose);
const loginModal = document.querySelector("#login-modal");
console.log(loginModal);

//로그인 모달
const body = document.querySelector("body");

loginIcon.addEventListener("click", () => {
  loginModal.style = "display: flex;";
  body.classList.add("stop-scrolling");
});

loginClose.addEventListener("click", () => {
  loginModal.style = "display: none;";
  body.classList.remove("stop-scrolling");
});
