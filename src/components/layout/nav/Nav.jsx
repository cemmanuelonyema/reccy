import {} from 'react';
import styles from './Nav.module.scss';
import { FaPlus, FaBookmark } from '../../../assets/index';
import { ThemeToggle } from '../../atoms/themeToggle/ThemeToggle';

const Nav = () => {
      return (
            <nav className={styles.nav}>
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
