const projectsGrid = document.getElementById("projectsGrid");

function renderProjects(){
    projects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");
        card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <button onclick="navigateTo('${project.path}')">Abrir Proyecto
        </button>
        `;
        projectsGrid.appendChild(card);
    });
}
function navigateTo(path){
    window.location.href = path;
}
renderProjects();