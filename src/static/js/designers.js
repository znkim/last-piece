const names = ["권혜원", "김기태", "김병준", "김상윤", "김성효", "김승기", "김예신", "김은지", "문상범", "박여은", "박예은", "박혜림", "석지영", "신정희", "양경현", "양유정", "윤지현", "이연지", "이찬희", "장예은", "정시운", "조주연", "채혜리", "최윤희", "최인우", "황승민", "황승헌"];

const clearDesigners = () => {
    const designersList = document.getElementById("designers-list");
    while (designersList.firstChild) {
        designersList.removeChild(designersList.firstChild);
    }
}

const loadDesigners = () => {
    const designersList = document.getElementById("designers-list");
    names.forEach(name => {
        const designerDiv = document.createElement("li");
        const imageDiv = document.createElement("div");
        imageDiv.className = "profile-frame";

        const imageTag = document.createElement("img");
        imageTag.src = `../src/static/img/profiles/${name}.png`;
        imageTag.alt = name;
        imageDiv.appendChild(imageTag);

        const span = document.createElement("span");
        span.textContent = name;

        designerDiv.appendChild(imageDiv);
        designerDiv.appendChild(span);
        designersList.appendChild(designerDiv);

        designerDiv.addEventListener("click", () => {
            const ROOT = getRootPath();
            let isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
            let relativePath = isMobile ? "mobile/" : "web/"; // 앞에 "/" 제거!
            window.location.href = ROOT + relativePath + "de-contents.html?name=" + encodeURIComponent(name);
        });
    });
};

document.addEventListener("DOMContentLoaded", function(){
    clearDesigners();
    loadDesigners();
});
