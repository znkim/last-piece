import * as db from "./database.js";
import {getRootPath} from "./header-event.js";

document.addEventListener("DOMContentLoaded", function(){
    const root = getRootPath();
    const url = new URL(window.location.href);
    let projectId = parseInt(url.searchParams.get("projectId"));

    if (projectId === null || isNaN(projectId)) {
        projectId = 1;
    }

    const project = db.getProjectById(projectId);
    console.log(project);

    const titleElement = document.getElementById("project-title");
    titleElement.textContent = project.title;
    const descriptionElement = document.getElementById("project-description");
    descriptionElement.textContent = project.description;

    const designerId = project.designerId[0];
    const designerData = db.getDesignerById(designerId);
    const designerElement = document.getElementById("designer-name");
    designerElement.textContent = designerData.name;
    const designerEnglishElement = document.getElementById("designer-english-name");
    designerEnglishElement.textContent = designerData.englishName;
    const emailElement = document.getElementById("designer-email");
    emailElement.innerHTML = `<span>E-MAIL</span> ${designerData.email}`;
    const snsElement = document.getElementById("designer-sns");
    snsElement.innerHTML = `<span>SNS</span> ${designerData.sns}`;

    const designer2Id = project.designerId[1];
    if (designer2Id) {
        const designer2Data = db.getDesignerById(designer2Id);
        const designer2Element = document.getElementById("designer-name2");
        designer2Element.textContent = designer2Data.name;
        const designerEnglish2Element = document.getElementById("designer-english-name2");
        designerEnglish2Element.textContent = designer2Data.englishName;
        const email2Element = document.getElementById("designer-email2");
        email2Element.innerHTML = `<span>E-MAIL</span> ${designer2Data.email}`;
        const sns2Element = document.getElementById("designer-sns2");
        sns2Element.innerHTML = `<span>SNS</span> ${designer2Data.sns}`;
    }

    const contentListElement = document.getElementById("pr-contents-wrap");
    project.contents.forEach(content => {
        const contentDiv = document.createElement("div");
        contentDiv.className = "pr-content-item";
        const contentString = content.toString();

        if (contentString.endsWith(".png") || contentString.endsWith(".jpg") || contentString.endsWith(".jpeg") || contentString.endsWith(".gif")) {
            const imgElement = document.createElement("img");
            imgElement.src = `${root}projects_details/${content}`;
            imgElement.style = `width: 100%;`;
            contentDiv.appendChild(imgElement);
        } else if (contentString.indexOf("youtube.com") !== -1 || contentString.indexOf("youtu.be") !== -1) {
            // youTube link 처리
            const videoElement = document.createElement("iframe");
            let videoUrl = contentString;

            // https://youtu.be/MDX8fylSisU
            if (videoUrl.indexOf("youtu.be") !== -1) {
                const videoId = videoUrl.split("youtu.be/")[1];
                videoUrl = `https://www.youtube.com/embed/${videoId}`;
            } else {
                // https://www.youtube.com/watch?v=MDX8fylSisU
                const urlObj = new URL(videoUrl);
                const videoId = urlObj.searchParams.get("v");
                videoUrl = `https://www.youtube.com/embed/${videoId}`;
            }

            // 유튜브 공유 링크를 임베드 링크로 변환
            videoElement.src = videoUrl;
            videoElement.width = "100%";
            let isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
            if (isMobile) {
                videoElement.height = "250px";
            } else {
                videoElement.height = "800px";
            }
            videoElement.title = "YouTube video player";
            videoElement.frameBorder = "0";
            videoElement.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
            videoElement.allowFullscreen = true;
            contentDiv.appendChild(videoElement);
        }




        contentListElement.appendChild(contentDiv);
    });

    const ROOT = getRootPath();
    let isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
    let relativePath = isMobile ? "mobile/" : "web/"; // 앞에 "/" 제거!
    const prevPage = document.getElementById("prev-page");
    prevPage.addEventListener("click", () => {
        let prevProjectId = project.projectId - 1;
        window.location.href = ROOT + relativePath + "pr-contents.html?projectId=" + encodeURIComponent(prevProjectId);
    });
    if (project.projectId === 1) {
        prevPage.style.visibility = "hidden";
    }

    const nextPage = document.getElementById("next-page");
    nextPage.addEventListener("click", () => {
        let nextProjectId = project.projectId + 1;

        window.location.href = ROOT + relativePath + "pr-contents.html?projectId=" + encodeURIComponent(nextProjectId);
    });
    if (project.projectId === db.getProjects().length) {
        nextPage.style.visibility = "hidden";
    }
});

const scrollToTop = () => {
    let isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
    console.log("scrollToTop initialized");
    const wrapper = document.getElementById("pr-contents-scroll");
    const scrollBtn = document.getElementById("scroll-to-top");
    if (!scrollBtn) return;

    let footer = document.getElementById("footer");
    if (footer == null) {
        footer = document.querySelector("footer");
    }

    let defaultBottom; // 기본 bottom(px)
    if (!isMobile) {
        defaultBottom = 40;

        scrollBtn.addEventListener("click", () => {
            wrapper.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

        wrapper.addEventListener("scroll", () => {
            const windowHeight = window.innerHeight; // wrapper height 고려
            const footerTop = footer.getBoundingClientRect().top;
            // footer가 화면에 닿기 시작하면
            if (footerTop < windowHeight) {
                const offset = windowHeight - footerTop;
                console.log(offset);
                scrollBtn.style.bottom = `${defaultBottom + offset}px`;
            } else {
                scrollBtn.style.bottom = `${defaultBottom}px`;
            }
        });
    } else {
        defaultBottom = 20;
        scrollBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

        window.addEventListener("scroll", () => {
            const windowHeight = window.innerHeight;
            const footerTop = footer.getBoundingClientRect().top;

            // footer가 화면에 닿기 시작하면
            if (footerTop < windowHeight) {
                const offset = windowHeight - footerTop;
                console.log(offset);
                scrollBtn.style.bottom = `${defaultBottom + offset}px`;
            } else {
                scrollBtn.style.bottom = `${defaultBottom}px`;
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", function(){
    scrollToTop();
});
