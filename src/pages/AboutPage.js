import React from "react";
import Title from "../components/Title";
import ImageSection from "../components/ImageSection";
import SkillsSection from "../components/SkillsSection";
import ServicesSection from "../components/ServicesSection";
import react from "../img/react.png";
import spring from "../img/spring.png";
import angular from "../img/angular.png";
import javascript from "../img/javascript.png";
import java from "../img/java.png";
import docker from "../img/docker.png";
import html from "../img/html.png";
import css from "../img/css.png";
import node from "../img/node.png";
import sqlServer from "../img/sql-server.png";
import mySql from "../img/my-sql.png";
import mongo from "../img/mongo.png";
import git from "../img/git.png";

const AboutPage = () => {
  return (
    <div className="AboutPage" style={{ textAlign: "center" }}>
      <ImageSection />

      <Title title={"Tecnologías que manejo"} span={""} />

      <div className="skillsContainer">
        <SkillsSection skill={"Java"} progress={"75%"} width={"1050%"} />
        <SkillsSection skill={"Spring"} progress={"70%"} width={"550%"} />

        <SkillsSection skill={"Angular"} progress={"50%"} width={"250%"} />
        <SkillsSection skill={"React Js"} progress={"60%"} width={"280%"} />
        <SkillsSection skill={"JavaScrip"} progress={"60%"} width={"225%"} />
        <SkillsSection skill={"Html5"} progress={"50%"} width={"420%"} />
        <SkillsSection skill={"CSS"} progress={"50%"} width={"680%"} />
        <SkillsSection skill={"NodeJs"} progress={"50%"} width={"310%"} />

        <SkillsSection skill={"SQL Server"} progress={"70%"} width={"205%"} />
        <SkillsSection skill={"MySQL"} progress={"70%"} width={"490%"} />
        <SkillsSection skill={"MongoDB"} progress={"50%"} width={"200%"} />

        <SkillsSection skill={"Git"} progress={"80%"} width={"1210%"} />
        <SkillsSection skill={"Docker"} progress={"50%"} width={"363%"} />
        <SkillsSection skill={"SonarQube"} progress={"50%"} width={"157%"} />
      </div>

      <div className="services-container">
        <ServicesSection image={java} title={"Curso de Java"} text={""} />
        <ServicesSection image={spring} title={"Spring Boot"} text={""} />
        <ServicesSection image={angular} title={"Angular"} text={""} />
        <ServicesSection image={react} title={"React Js"} text={""} />
        <ServicesSection image={javascript} title={"JavaScript"} text={""} />
        <ServicesSection image={html} title={"Html5"} text={""} />
        <ServicesSection image={css} title={"CSS"} text={""} />
        <ServicesSection image={node} title={"NodeJs"} text={""} />
        <ServicesSection image={sqlServer} title={"SQL Server"} text={""} />
        <ServicesSection image={mySql} title={"MySQL"} text={""} />
        <ServicesSection image={mongo} title={"MongoDB"} text={""} />
        <ServicesSection image={git} title={"Git"} text={""} />
        <ServicesSection image={docker} title={"Docker"} text={""} />
      </div>
    </div>
  );
};

export default AboutPage;
