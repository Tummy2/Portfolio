import styles from "./HeaderStyles.module.css";

function Header() {
  return (
    <section id="header" className={styles.container}>
      <nav>
        <div class="nav-container">
          <div class="links">
            <div class="link">
              <a href="#hero" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Home</a>
            </div>
            <div class="link">
              <a href="#projects" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Projects</a>
            </div>
            <div class="link">
              <a href="#skills" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Skills</a>
            </div>
            <div class="link">
              <a href="#contact" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Contact</a>
            </div>
          </div>
          <i class="fa-solid fa-bars hamburg" onclick="hamburg()"></i>
        </div>
        <div class="dropdown">
            <div class="links">
                <a href="">Home</a>
                <a href="">Projects</a>
                <a href="">Skills</a>
                <a href="">Contact</a>
                <i class="fa-solid fa-xmark cancel" onclick="cancel()"></i>
            </div>
        </div>
      </nav>
    </section>
  );
}

export default Header;
