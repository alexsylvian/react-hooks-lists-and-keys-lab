import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectComponents = projects.map((project) => {
    return <ProjectItem technologies={project.technologies} about={project.about} name={project.name} key={project.id}/>
  })
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectComponents}</div>
    </div>
  );
}

export default ProjectList;
