import React from 'react';
import styles from './ThemeToggle.module.scss';

export const ThemeToggle = () => {
      return (
            <article className={styles.toggle}>
                  <input
                        type="checkbox"
                        id="switch"
                        name="theme"
                        className={styles.toggleInput}
                  />
                  <label htmlFor="switch" className={styles.toggleLabel} />
            </article>
      );
};
