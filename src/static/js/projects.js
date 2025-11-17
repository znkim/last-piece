import {getRootPath} from "./header-event.js";
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
        /*
                    <li>
                        <div class="project-frame">
                            <h4>UX/UI</h4>
                            <div class="project-image"></div>
                            <h2>홍길동 테스트</h2>
                            <p>홍길동</p>
                        </div>
                    </li>
         */
        const projectDiv = document.createElement("li");
        const frameDiv = document.createElement("div");
        frameDiv.className = "project-frame";
        const typeH4 = document.createElement("h4");
        typeH4.textContent = project.type;
        const imageDiv = document.createElement("div");
        imageDiv.className = "project-image";
        imageDiv.style = `background-image : url(/projects/${project.thumbnailUrl});background-size: 302px 302px;background-position: 0px 0px;`;
        const titleH2 = document.createElement("h2");
        titleH2.textContent = project.title;

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

    const footer = document.getElementById("footer");
    const defaultBottom = 40; // 기본 bottom(px)

    window.addEventListener("scroll", () => {
        const windowHeight = window.innerHeight;
        const footerTop = footer.getBoundingClientRect().top;

        // footer가 화면에 닿기 시작하면
        if (footerTop < windowHeight) {
            const offset = windowHeight - footerTop;
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
