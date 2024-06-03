// close navbar diluar navbar
export const navbarClose = (navbar, hamburgerBtn, body) => {
  window.addEventListener("click", (e) => {
    if (!navbar.current?.contains(e.target) && !hamburgerBtn.current.contains(e.target)) {
      navbar.current.style.right = "-200px";
      body.style.setProperty("--display", "none");
    }
  });
};

// close navbar
export const closeNavbar = (navbar, body) => {
  body.style.setProperty("--display", "none");
  navbar.current.style.right = "-200px";
};

// scroll navbar
export const scrollNavbar = (setShadow, shadow) => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setShadow(!shadow);
    } else {
      setShadow(shadow);
    }
  });
};
// open navbar
export const openNavbar = (navbar, body) => {
  navbar.current.style.right = 0;
  body.style.setProperty("--display", "block");
};
