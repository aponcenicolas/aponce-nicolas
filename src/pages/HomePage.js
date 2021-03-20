import React from "react";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage = () => {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hola soy
          <span> Nicolas Aponce</span>
        </h1>
        <p className="h-sub-text">
          Gracias por visitar mi perfil profesional. Soy un joven responsable,
          amable y respetuoso, tengo 25 años vivo en la ciudad Lima Perú, en el
          2019 terminé de estudiar la carrera de computación e informática.
          Tengo 3 años de experiencia en el mundo del desarrollo de software, a
          lo largo de mi carrera profesional me ha tocado afrontar diversos
          obstáculos y los he superado todos y en el proceso he ganado mucha
          experiencia tanto como desarrollador y como persona.
        </p>
        <div className="icons">
          <a
            href="https://www.facebook.com/Zoro.Nicolas"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </a>

          <a href="https://github.com/aponcenicolas" className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>

          <a
            href="https://www.linkedin.com/in/aponcenicolas/"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon ln" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
