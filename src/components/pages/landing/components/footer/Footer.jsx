import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
      return (
            <footer>
                  <div className={`${styles.footer__container} container`}>
                        <div>logo</div>
                        <nav className={styles.footer_nav}>
                              <p className="footer-heading">Account</p>
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
                              <p className="footer-heading">Company</p>
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

                        <div> address</div>
                  </div>
            </footer>
      );
};

export default Footer;
