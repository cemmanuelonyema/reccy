import React from 'react';
import styles from './Footer.module.scss';
import {
      FaFacebookF,
      FaTwitter,
      FaLinkedinIn,
      FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
      const date = new Date();
      const year = date.getFullYear();
      return (
            <footer className={styles.footer}>
                  <div className={`${styles.footer__container} container`}>
                        <div className={styles.company}>
                              <img src="" alt="logo" />
                              <div className={styles.icons}>
                                    <div className={styles.iconBox}>
                                          <FaInstagram
                                                size={16}
                                                style={{ color: '#4DC39E' }}
                                          />
                                    </div>
                                    <div className={styles.iconBox}>
                                          <FaFacebookF
                                                size={16}
                                                style={{ color: '#4DC39E' }}
                                          />
                                    </div>

                                    <div className={styles.iconBox}>
                                          <FaLinkedinIn
                                                size={16}
                                                style={{ color: '#4DC39E' }}
                                          />
                                    </div>
                                    <div className={styles.iconBox}>
                                          <FaTwitter
                                                size={16}
                                                style={{ color: '#4DC39E' }}
                                          />
                                    </div>
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
                              <address className={styles.footer_contact}>
                                    <p className={styles.footer_address}>
                                          623 Harrison St., 2nd Floor, <br />
                                          San Francisco, CA 94107
                                    </p>
                                    <p>
                                          <a
                                                className="footer-link"
                                                href="tel:415-201-6370"
                                          >
                                                415-201-6370
                                          </a>
                                          <br />
                                          <a
                                                className="footer-link"
                                                href="mailto:hello@omnifood.com"
                                          >
                                                hello@omnifood.com
                                          </a>
                                    </p>
                              </address>
                        </div>
                  </div>
            </footer>
      );
};

export default Footer;
