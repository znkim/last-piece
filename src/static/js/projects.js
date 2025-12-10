import {getRootPath, resolvePath} from "./header-event.js";
import * as db from "./database.js";

const clearProjects = () => {
    const list = document.getElementById("projects-list");
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

const loadProjects = () => {
    const list = document.getElementById("projects-list");
    const projects = db.getProjects();
    projects.forEach(project => {
        const projectDiv = document.createElement("li");
        const frameDiv = document.createElement("div");
        frameDiv.className = "project-frame";
        const typeH4 = document.createElement("h4");
        typeH4.textContent = project.type;
        const imageDiv = document.createElement("div");
        imageDiv.className = "project-image";

        let rootPath = getRootPath();
        let thumbnailUrl = project.thumbnailUrl;
        thumbnailUrl = thumbnailUrl.replace("/projects", "/projects_thumbnails");
        thumbnailUrl = resolvePath(rootPath, thumbnailUrl);
        imageDiv.style = `background-image : url(${thumbnailUrl});`;
        const titleH2 = document.createElement("h2");
        //titleH2.textContent = project.title;
        titleH2.innerHTML = project.title;

        let designerIds = project.designerId || [];
        let designerNames = designerIds.map(id => {
            let designer = db.getDesignerById(id);
            return designer ? designer.name : "Unknown";
        });
        let designerNameStr = designerNames.join(" ");

        const nameP = document.createElement("p");
        nameP.textContent = designerNameStr;
        frameDiv.appendChild(typeH4);
        frameDiv.appendChild(imageDiv);
        frameDiv.appendChild(titleH2);
        frameDiv.appendChild(nameP);
        projectDiv.appendChild(frameDiv);
        list.appendChild(projectDiv);

        projectDiv.addEventListener("click", () => {
            const ROOT = getRootPath();
            let isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
            let relativePath = isMobile ? "mobile/" : "web/"; // 앞에 "/" 제거!
            window.location.href = ROOT + relativePath + "pr-contents.html?projectId=" + encodeURIComponent(project.projectId);
        });
    });
};

const scrollToTop = () => {
    const scrollBtn = document.getElementById("scroll-to-top");
    if (!scrollBtn) return;
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    let isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
    let defaultBottom = 40; // 기본 bottom(px)
    if (isMobile) {
        defaultBottom = 20;
    }

    window.addEventListener("scroll", () => {
        const windowHeight = window.innerHeight;
        /*const footerTop = footer.getBoundingClientRect().top;*/
        const maximumScroll = document.documentElement.scrollHeight - window.innerHeight;
        const footerHeight = 120; // px

        if (window.scrollY >= maximumScroll - footerHeight) {
            const offset = window.scrollY - (maximumScroll - footerHeight);
            scrollBtn.style.bottom = `${defaultBottom + offset}px`;
        } else {
            scrollBtn.style.bottom = `${defaultBottom}px`;
        }
    });
}

document.addEventListener("DOMContentLoaded", function(){
    console.log(db);
    clearProjects();
    loadProjects();
    scrollToTop();
});
