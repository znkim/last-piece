import {getRootPath} from "./header-event.js";
import * as db from "./database.js";

//const names = ["권혜원", "김기태", "김병준", "김상윤", "김성효", "김승기", "김예신", "김은지", "문상범", "박여은", "박예은", "박혜림", "석지영", "신정희", "양경현", "양유정", "윤지현", "이연지", "이찬희", "장예은", "정시운", "조주연", "채혜리", "최윤희", "최인우", "황승민", "황승헌"];

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

        const designerDiv = document.createElement("li");
        const imageDiv = document.createElement("div");
        imageDiv.className = "profile-frame";

        const imageTag = document.createElement("img");
        const root = getRootPath();
        imageTag.src = root + `profiles/${name}.png`;
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

document.addEventListener("DOMContentLoaded", function(){
    clearDesigners();
    loadDesigners();
    scrollToTop();
});
