import {} from 'react';
import styles from './Nav.module.scss';

const Nav = () => {
      return (
            <nav className={styles.nav}>
                  <ul className={styles.navList}>
                        <li>
                              <button className={styles.toolBtn}>
                                    <span>+</span>
                                    <span className={styles.toolText}>
                                          Add recipe
                                    </span>
                              </button>
                        </li>
                        <li>
                              <button className={styles.toolBtn}>
                                    <span>B</span>
                                    <span className={styles.toolText}>
                                          Bookmark
                                    </span>
                              </button>
                        </li>
                        <li>
                              <button>Mood</button>
                        </li>
                  </ul>
            </nav>
      );
};

export default Nav;
