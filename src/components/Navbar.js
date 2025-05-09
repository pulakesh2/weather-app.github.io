import { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import styles from "./NavBar.module.css";
import { Link } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function clickHandler() {
    setIsMenuOpen(!isMenuOpen);
  }

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <button
        className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      <ul className={`${styles.navList} ${isMenuOpen ? styles.active : ""}`}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.logo}>
            WeatherApp
          </Link>
        </li>

        <li className={`${styles.navItem} ${styles.searchArea}`}>
          <SearchBox onClick={clickHandler} />
        </li>

        <li className={styles.navItem}>
          <Link to="/contact" className={styles.contactLink}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
