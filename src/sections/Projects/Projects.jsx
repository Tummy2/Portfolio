import React from "react";
import styles from "./ProjectStyles.module.css";
import ffbot from "../../assets/discord2.png";
import aidrawing from "../../assets/aidrawing.png";
import algo from "../../assets/searchAlgo.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ffbot}
          link="https://github.com/Tummy2/FFBot"
          h3="FF Bot"
          p="Stat Checking and Trashtalking Discord Bot"
        />
        <ProjectCard
          src={aidrawing}
          link="https://github.com/Tummy2/AI-Custom-Drawings-Classifier"
          h3="AI Drawing Classifier"
          p="AI that classifies drawings based on user provided data"
        />
        <ProjectCard
          src={algo}
          link="https://path-search-visualizer-sigma.vercel.app/"
          h3="Algorithm Visualizer"
          p="Website that visualizes search algorithms such as A*, Dijkstra's, etc...."
        />
      </div>
    </section>
  );
}
export default Projects;
