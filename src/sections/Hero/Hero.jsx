import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import resume from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picure of Tommy Le"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Tommy
          <br />
          Le
        </h1>
        <h2>Aspiring Software Engineer</h2>
        <span>
          <a href="https://github.com/Tummy2" target="_blank">
            <img src={githubIcon} alt="GitHub Icon" />
          </a>
          <a href="https://www.linkedin.com/in/thomas-q-le/" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>
        </span>
        <p className={styles.description}>I enjoy making fun and useful Software. Aside from coding, I enjoy going to the gym, volleyball, eating lots of food, and gaming!</p>
        <a href={resume} target="_blank">
          <button className="hover">Resume :D</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
