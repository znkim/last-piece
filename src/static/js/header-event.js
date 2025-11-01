const BASE_URL = new URL('.', import.meta.url).pathname
window.onload = function() {
    const ROOT = new URL('.', location).pathname;
    let isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    let relativePath = isMobile ? "mobile/" : "web/"; // 앞에 "/" 제거!

    const logoBtn = document.getElementById("logo-btn");
    const logoTextBtn = document.getElementById("logo-text-btn");
    const projectsBtn = document.getElementById("projects-btn");
    const designerBtn = document.getElementById("designer-btn");
    const exhibitionBtn = document.getElementById("exhibition-btn");
    const sponsorBtn = document.getElementById("sponsor-btn");
    const instagramBtn = document.getElementById("instagram-btn");
    const locationBtn = document.getElementById("location-btn");

    logoBtn.onclick = () => {
        window.location.href = ROOT;
    }
    logoTextBtn.onclick = () => {
        window.location.href = ROOT;
    }

    projectsBtn.onclick = () => {
        window.location.href = ROOT + relativePath + "projects.html";
    }
    designerBtn.onclick = () => {
        window.location.href = ROOT + relativePath + "designer.html";
    }
    exhibitionBtn.onclick = () => {
        window.location.href = ROOT + relativePath + "exhibition.html";
    }
    sponsorBtn.onclick = () => {
        window.location.href = ROOT + relativePath + "sponsor.html";
    }

    instagramBtn.onclick = () => {
        window.open("https://www.instagram.com/designkey_pizza/", "_blank");
    }
    locationBtn.onclick = () => {
        window.open("https://naver.me/FeXRTU5Q", "_blank");
    }
}