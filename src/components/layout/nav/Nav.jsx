import { useState } from 'react';
import styles from './Nav.module.scss';
import {
      FaPlus,
      FaBookmark,
      FaHamburger,
      FaTimes,
} from '../../../assets/index';
import { ThemeToggle } from '../../atoms/themeToggle/ThemeToggle';

const Nav = () => {
      const [toggle, setToggle] = useState(false);

      return (
            <nav className={styles.nav}>
                  {/* <div
                        className={styles.toggle}
                        onClick={() => setToggle(!toggle)}
                  >
                        {toggle ? <FaTimes /> : <FaHamburger />}
                  </div> */}
                  <ul className={styles.navList}>
                        <li>
                              <button className={styles.toolBtn}>
                                    <FaPlus />
                                    <span className={styles.toolText}>
                                          Add recipe
                                    </span>
                              </button>
                        </li>
                        <li>
                              <button className={styles.toolBtn}>
                                    <FaBookmark />
                                    <span className={styles.toolText}>
                                          Bookmark
                                    </span>
                              </button>
                        </li>
                        <ThemeToggle />
                  </ul>
            </nav>
      );
};

export default Nav;
