import * as db from "./database.js";
import {getRootPath, resolvePath} from "./header-event.js";

document.addEventListener("DOMContentLoaded", function(){
    const root = getRootPath();
    const url = new URL(window.location.href);
    let id = parseInt(url.searchParams.get("id"));

    const name = url.searchParams.get("name");
    let designer;
    if (name !== null) {
        console.log(name);
        designer = db.getDesignerByName(name);
    } else {
        if (id === null || isNaN(id)) {
            id = 1;
        }
        designer = db.getDesignerById(id);
    }
    console.log(designer);

    const nameTag = document.getElementById("designer-name");
    nameTag.textContent = designer.name;
    const engNameTag = document.getElementById("designer-english-name");
    engNameTag.textContent = designer.englishName;
    const snsTag = document.getElementById("designer-sns");
    //snsTag.textContent = designer.sns;
    snsTag.innerHTML = `<span>SNS</span>${designer.sns}`;
    if (designer.sns === "" || designer.sns === null) {
        snsTag.style.display = "none";
    }
    const emailTag = document.getElementById("designer-email");
    //emailTag.textContent = designer.email;
    emailTag.innerHTML = `<span>E-MAIL</span>${designer.email}`;
    const descriptionTag = document.getElementById("designer-description");
    descriptionTag.textContent = designer.description;
    // /profiles -> /profiles_details
    let profileUrl = resolvePath(root, designer.profileUrl);
    profileUrl = profileUrl.replace("/profiles", "/profiles_details");
    const profileImageTag = document.getElementById("designer-image");
    profileImageTag.src = profileUrl;


    const projectId = designer.projectId;
    const project = db.getProjectById(projectId);
    console.log(project);

    const projectNameTag = document.getElementById("project-name");
    projectNameTag.textContent = project.title;
    let thumbnailUrl = project.thumbnailUrl;
    thumbnailUrl = resolvePath(root, thumbnailUrl);

    const projectThumbnailTag = document.getElementById("thumbnail-image"); // div
    //projectThumbnailTag.src = root + thumbnailUrl;
    projectThumbnailTag.style = "cursor: pointer;";
    projectThumbnailTag.style.backgroundImage = `url(${thumbnailUrl})`;

    projectThumbnailTag.addEventListener("click", () => {
        console.log("click project thumbnail");
        let isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
        let relativePath = isMobile ? "mobile/" : "web/"; // 앞에 "/" 제거!
        window.location.href = root + relativePath + "pr-contents.html?projectId=" + encodeURIComponent(project.projectId);
    });
});
