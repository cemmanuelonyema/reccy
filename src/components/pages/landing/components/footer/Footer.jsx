import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
      const date = new Date();
      const year = date.getFullYear();
      return (
            <footer className={styles.footer}>
                  <div className={`${styles.footer__container} container`}>
                        <div className={styles.company}>
                              <img src="" alt="logo" />
                              <div className={styles.icons}>
                                    <span>fa</span>
                                    <span>Ins</span>
                                    <span>twi</span>
                                    <span>lin</span>
                              </div>
                              <p className={styles.footer_para}>
                                    Copyright &copy; {year} by Omnifood, Inc.{' '}
                                    <br />
                                    Developed by
                                    <a
                                          href="https://cemmanuelonyema.vercel.app"
                                          target="_blank"
                                          className={styles.dev}
                                    >
                                          Emmanuel Onyema
                                    </a>
                                    All rights reserved.
                              </p>
                        </div>
                        <nav className={styles.footer_nav}>
                              <p className={styles.footer_heading}>Account</p>
                              <ul className={styles.footer_ul}>
                                    <li>
                                          <a className="footer-link" href="#">
                                                Create account
                                          </a>
                                    </li>
                                    <li>
                                          <a className="footer-link" href="#">
                                                Sign in
                                          </a>
                                    </li>
                                    <li>
                                          <a className="footer-link" href="#">
                                                iOS app
                                          </a>
                                    </li>
                                    <li>
                                          <a className="footer-link" href="#">
                                                Android app
                                          </a>
                                    </li>
                              </ul>
                        </nav>

                        <nav className={styles.footer_nav}>
                              <p className={styles.footer_heading}>Company</p>
                              <ul className={styles.footer_ul}>
                                    <li>
                                          <a className="footer-link" href="#">
                                                About Omnifood
                                          </a>
                                    </li>
                                    <li>
                                          <a className="footer-link" href="#">
                                                For Business
                                          </a>
                                    </li>
                                    <li>
                                          <a className="footer-link" href="#">
                                                Cooking partners
                                          </a>
                                    </li>
                                    <li>
                                          <a className="footer-link" href="#">
                                                Careers
                                          </a>
                                    </li>
                              </ul>
                        </nav>

                        <div>
                              <p className={styles.footer_heading}> Address</p>
                        </div>
                  </div>
            </footer>
      );
};

export default Footer;
