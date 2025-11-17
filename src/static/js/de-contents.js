import * as db from "./database.js";
import {getRootPath} from "./header-event.js";

document.addEventListener("DOMContentLoaded", function(){
    const root = getRootPath();
    const url = new URL(window.location.href);
    const id = parseInt(url.searchParams.get("id"));
    console.log(id);

    const designer = db.getDesignerById(id);
    console.log(designer);
    const nameTag = document.getElementById("designer-name");
    nameTag.textContent = designer.name;
    const engNameTag = document.getElementById("designer-english-name");
    engNameTag.textContent = designer.englishName;
    const snsTag = document.getElementById("designer-sns");
    //snsTag.textContent = designer.sns;
    snsTag.innerHTML = `<span>SNS</span>${designer.sns}`;
    const emailTag = document.getElementById("designer-email");
    //emailTag.textContent = designer.email;
    emailTag.innerHTML = `<span>E-Mail</span>${designer.email}`;
    const descriptionTag = document.getElementById("designer-description");
    descriptionTag.textContent = designer.description;
    const profileUrl = root + designer.profileUrl;
    const profileImageTag = document.getElementById("designer-image");
    profileImageTag.src = profileUrl;



    const projectId = designer.projectId;
    const project = db.getProjectById(projectId);
    console.log(project);

    const projectNameTag = document.getElementById("project-name");
    projectNameTag.textContent = project.title;
    const thumbnailUrl = project.thumbnailUrl;

    const projectThumbnailTag = document.getElementById("thumbnail-image");
    projectThumbnailTag.src = root + "projects/" + thumbnailUrl;
    projectThumbnailTag.style = "cursor: pointer;";

    //click
    projectThumbnailTag.addEventListener("click", () => {
        console.log("click project thumbnail");
        let isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
        let relativePath = isMobile ? "mobile/" : "web/"; // 앞에 "/" 제거!
        window.location.href = root + relativePath + "pr-contents.html?projectId=" + encodeURIComponent(project.projectId);
    });







    //const project
});
