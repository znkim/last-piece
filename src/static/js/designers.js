import {getRootPath} from "./header-event.js";
import * as db from "./database.js";

const clearDesigners = () => {
    const designersList = document.getElementById("designers-list");
    while (designersList.firstChild) {
        designersList.removeChild(designersList.firstChild);
    }
}

const loadDesigners = () => {
    const designersList = document.getElementById("designers-list");
    let index = 0;
    const designers = db.getDesigners();
    designers.forEach(designer => {
        const name = designer.name;
        const englishName = designer.englishName;

        const designerDiv = document.createElement("li");
        const imageDiv = document.createElement("div");
        imageDiv.className = "profile-frame";

        const imageTag = document.createElement("img");
        const root = getRootPath();
        imageTag.src = root + `profiles/${englishName.replaceAll(" ", "")}.png`;
        imageTag.alt = name;
        imageDiv.appendChild(imageTag);

        const span = document.createElement("span");
        span.textContent = name;

        designerDiv.appendChild(imageDiv);
        designerDiv.appendChild(span);
        designersList.appendChild(designerDiv);

        designerDiv.addEventListener("click", () => {
            const root = getRootPath();
            let isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
            let relativePath = isMobile ? "mobile/" : "web/"; // 앞에 "/" 제거!
            window.location.href = root + relativePath + "de-contents.html?id=" + encodeURIComponent(designer.id);
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

    let footer = document.getElementById("footer");
    if (footer == null) {
        footer = document.querySelector("footer");
    }

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
    clearDesigners();
    loadDesigners();
    scrollToTop();
});
