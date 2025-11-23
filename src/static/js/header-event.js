export const getRootPath = (surfix) => {
    const url = new URL(window.location.href);
    const root = url.origin;
    const splitPath = url.pathname.split('/');
    const firstPath = splitPath[1];
    if (firstPath !== '' && firstPath !== 'mobile' && firstPath !== 'web') {
        return root + '/' + firstPath + '/';
    }
    
    let result = root + '/';
    if (surfix) {
        result += surfix + '/';
    }
    return result;
}

const setHeaderButtonEvents = () => {
    const root = getRootPath();
    let isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
    let relativePath = isMobile ? "mobile/" : "web/"; // 앞에 "/" 제거!

    const hamburgerBtn = document.getElementById("hamburger-menu-btn");
    const navMenu = document.querySelector("div.nav-menu");
    if (hamburgerBtn) {
        hamburgerBtn.onclick = () => {
            const body = document.body;
            //const navMenu = document.getElementById("nav-menu");
            if (navMenu.style.display === "flex") {
                navMenu.style.display = "none";
                body.style.position = "static";
            } else {
                navMenu.style.display = "flex";
                body.style.position = "fixed";
            }
        }
    }

    const logoBtn = document.getElementById("logo-btn");
    const logoTextBtn = document.getElementById("logo-text-btn");
    const projectsBtn = document.getElementById("project-btn");
    const designerBtn = document.getElementById("designer-btn");
    const exhibitionBtn = document.getElementById("exhibition-btn");
    const sponsorBtn = document.getElementById("sponsor-btn");
    const instagramBtn = document.getElementById("instagram-btn");
    const locationBtn = document.getElementById("location-btn");

    logoBtn.onclick = () => {
        window.location.href = root;
    }
    logoTextBtn.onclick = () => {
        window.location.href = root;
    }

    projectsBtn.onclick = () => {
        window.location.href = root + relativePath + "project.html";
    }
    designerBtn.onclick = () => {
        window.location.href = root + relativePath + "designer.html";
    }
    exhibitionBtn.onclick = () => {
        //window.location.href = ROOT + relativePath + "exhibition.html";
    }
    sponsorBtn.onclick = () => {
        window.location.href = root + relativePath + "sponsor.html";
    }

    if (instagramBtn) {
        instagramBtn.onclick = () => {
            window.open("https://www.instagram.com/designkey_pizza/", "_blank");
        }
    }
    if (locationBtn) {
        locationBtn.onclick = () => {
            window.open("https://naver.me/FeXRTU5Q", "_blank");
        }
    }
}

const setHeaderAutoHide = () => {
    const header = document.querySelector("header");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        const currentY = window.scrollY;

        // 특정 지점 넘으면 absolute → fixed 전환
        if (currentY > lastScrollY) {
            header.classList.add("hide");
        } else {
            if (currentY > 80) {
                header.classList.add("fixed");
                // 아래로 스크롤 중 → 숨김
            } else if (currentY < 80) {
                header.classList.add("fixed");
            } else {
                header.classList.remove("fixed");
            }
            header.classList.remove("hide");
        }

        lastScrollY = currentY;
    });
}

window.onload = function() {
    setHeaderButtonEvents();
    setHeaderAutoHide();
}