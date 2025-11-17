import db from "./db.json";

export const getProjects = () => {
    return db.projects;
}

export const getDesigners = () => {
    return db.designers;
}

export const getProjectById = (id) => {
    return db.projects.find(project => project.projectId === id);
}

export const getDesignerById = (id) => {
    return db.designers.find(designer => designer.id === id);
}

export const getDesignerByName = (name) => {
    return db.designers.find(designer => designer.name === name);
}

