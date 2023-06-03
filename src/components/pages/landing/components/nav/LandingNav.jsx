import { useState } from 'react';
import { ThemeToggle } from '../../../../atoms/themeToggle/ThemeToggle';
import { FaTimes, FaHamburger } from '../../../../../assets/index';
import styles from './LandingNav.module.scss';

const LandingNav = () => {
      const [toggle, setToggle] = useState(false);

      return (
            <header className={styles.header}>
                  <div className={`${styles.header__container} container`}>
                        <div>logo</div>
                        <div className={styles.nav_container}>
                              <nav className={styles.nav}>
                                    <ul>
                                          <li>
                                                <a href="#steps">Steps</a>
                                          </li>
                                          <li>
                                                <a href="#gallery">Gallery</a>
                                          </li>
                                          <li>
                                                <a href="#pricing">Pricing</a>
                                          </li>
                                          <li>
                                                <a href="#contact">
                                                      Contact Us
                                                </a>
                                          </li>
                                    </ul>
                              </nav>
                              <ThemeToggle />
                        </div>
                        <div
                              className={styles.toggle}
                              onClick={() => setToggle(!toggle)}
                        >
                              {toggle ? (
                                    <FaTimes size={24} />
                              ) : (
                                    <FaHamburger size={24} />
                              )}
                        </div>
                  </div>
            </header>
      );
};

export default LandingNav;
