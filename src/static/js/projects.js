const projects = [
    {
        id: 1,
        type : "UX/UI",
        title : "자동 생성 테스트 타이틀 이름",
        name : "디자이너1"
    },
    {
        id: 2,
        type : "UX/UI",
        title : "자동 생성 테스트",
        name : "디자이너1 디자이너2"
    },
    {
        id: 3,
        type : "UX/UI",
        title : "자동 생성 테스트 타이틀 이름 그리고 자동 생성 테스트 타이틀 이름",
        name : "디자이너3"
    },
    {
        id: 4,
        type : "UX/UI",
        title : "자동 생성 테스트 타이틀 이름",
        name : "디자이너1"
    },
    {
        id: 5,
        type : "UX/UI",
        title : "자동 생성 테스트",
        name : "디자이너1 디자이너2"
    },
    {
        id: 7,
        type : "UX/UI",
        title : "자동 생성 테스트 타이틀 이름 그리고 자동 생성 테스트 타이틀 이름",
        name : "디자이너3"
    },
    {
        id: 7,
        type : "UX/UI",
        title : "자동 생성 테스트 타이틀 이름",
        name : "디자이너1"
    },
];
const clearProjects = () => {
    const list = document.getElementById("projects-list");
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

const loadProjects = () => {
    const list = document.getElementById("projects-list");
    projects.forEach(project => {
        /*
                    <li>
                        <div class="project-frame">
                            <h4>UX/UI</h4>
                            <div class="project-image"></div>
                            <h2>호돌이 테스트</h2>
                            <p>호돌이</p>
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
        const titleH2 = document.createElement("h2");
        titleH2.textContent = project.title;
        const nameP = document.createElement("p");
        nameP.textContent = project.name;
        frameDiv.appendChild(typeH4);
        frameDiv.appendChild(imageDiv);
        frameDiv.appendChild(titleH2);
        frameDiv.appendChild(nameP);
        projectDiv.appendChild(frameDiv);
        list.appendChild(projectDiv);

        projectDiv.addEventListener("click", () => {
            const ROOT = new URL('/', location).pathname;
            console.log(ROOT);
            let isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
            let relativePath = isMobile ? "mobile/" : "web/"; // 앞에 "/" 제거!
            window.location.href = ROOT + relativePath + "pr-contents.html?projectId=" + encodeURIComponent(project.id);
        });
    });
};

document.addEventListener("DOMContentLoaded", function(){
    clearProjects();
    loadProjects();
});
