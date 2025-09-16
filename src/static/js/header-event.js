window.onload = function() {
    const projectsBtn = document.getElementById("projects-btn");
    const designerBtn = document.getElementById("designer-btn");
    const exhibitionBtn = document.getElementById("exhibition-btn");
    const sponsorBtn = document.getElementById("sponsor-btn");
    const instagramBtn = document.getElementById("instagram-btn");
    const locationBtn = document.getElementById("location-btn");

    projectsBtn.onclick = () => {
        window.location.href = "./projects.html";
    }
    designerBtn.onclick = () => {
        window.location.href = "./designer.html";
    }
    exhibitionBtn.onclick = () => {
        window.location.href = "./exhibition.html";
    }
    sponsorBtn.onclick = () => {
        window.location.href = "./sponsor.html";
    }
    instagramBtn.onclick = () => {
        window.open("https://www.instagram.com/designkey_pizza/", "_blank");
    }
    locationBtn.onclick = () => {
        window.open("https://naver.me/FeXRTU5Q", "_blank");
    }
}