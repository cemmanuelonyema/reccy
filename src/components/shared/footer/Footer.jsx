import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => {
      const date = new Date();
      return (
            <footer className={styles.footer}>
                  <div className={styles.footer__container}>
                        <span>
                              &copy; {date.getFullYear()} Reccy - Developed by
                              &nbsp;
                              <a
                                    href="https://cemmanuelonyema.vercel.app"
                                    target="_blank"
                              >
                                    Emmanuel Onyema
                              </a>
                        </span>
                  </div>
            </footer>
      );
};
