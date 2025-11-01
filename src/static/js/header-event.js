const BASE_URL = new URL('.', import.meta.url).pathname
window.onload = function() {
    const logoBtn = document.getElementById("logo-btn");
    const logoTextBtn = document.getElementById("logo-text-btn");
    const projectsBtn = document.getElementById("projects-btn");
    const designerBtn = document.getElementById("designer-btn");
    const exhibitionBtn = document.getElementById("exhibition-btn");
    const sponsorBtn = document.getElementById("sponsor-btn");
    const instagramBtn = document.getElementById("instagram-btn");
    const locationBtn = document.getElementById("location-btn");

    let isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    let relativePath = isMobile ? BASE_URL + "/mobile/" : BASE_URL + "/web/";

    logoBtn.onclick = () => {
        window.location.href = BASE_URL;
    }
    logoTextBtn.onclick = () => {
        window.location.href = BASE_URL;
    }

    projectsBtn.onclick = () => {
        window.location.href = relativePath + "projects.html";
    }
    designerBtn.onclick = () => {
        window.location.href = relativePath + "designer.html";
    }
    exhibitionBtn.onclick = () => {
        window.location.href = relativePath + "exhibition.html";
    }
    sponsorBtn.onclick = () => {
        window.location.href = relativePath + "sponsor.html";
    }
    instagramBtn.onclick = () => {
        window.open("https://www.instagram.com/designkey_pizza/", "_blank");
    }
    locationBtn.onclick = () => {
        window.open("https://naver.me/FeXRTU5Q", "_blank");
    }
}