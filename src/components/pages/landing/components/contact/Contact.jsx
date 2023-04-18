import React, { useState } from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
      const [signInForm, setSignInForm] = useState({
            fullName: '',
            email: '',
            source: '',
      });

      const { fullName, email, source } = signInForm;
      const handleChange = (e) =>
            setContact({
                  ...contact,
                  [e.target.name]: e.target.value,
            });

      const handleSubmit = (e) => {
            e.preventDefault();

            setSignInForm({
                  name: '',
                  email: '',
                  phone: '',
                  label: '',
                  linkedIn: '',
                  instagram: '',
                  twitter: '',
            });
      };
      return (
            <section className={styles.sectionCta}>
                  <div className={`${styles.cta__container} container`}>
                        <div className={styles.book}>
                              <div className="book__form">
                                    <form action="#" className={styles.form}>
                                          <div className="u-margin-bottom-medium">
                                                <h2 className="heading-secondary">
                                                      Get your first meal for
                                                      free!
                                                </h2>
                                                <p>
                                                      Healthy, tasty and
                                                      hassle-free meals are
                                                      waiting for you. Start
                                                      eating well today. You can
                                                      cancel or pause anytime.
                                                      And the first meal is on
                                                      us!
                                                </p>
                                          </div>

                                          <div className={styles.form_group}>
                                                <input
                                                      type="text"
                                                      className={
                                                            styles.form_input
                                                      }
                                                      placeholder="Full name"
                                                      id="name"
                                                      required
                                                />
                                                <label
                                                      for="name"
                                                      className={
                                                            styles.form_label
                                                      }
                                                >
                                                      Full name
                                                </label>
                                          </div>

                                          <div className={styles.form_group}>
                                                <input
                                                      type="email"
                                                      className={
                                                            styles.form_input
                                                      }
                                                      placeholder="Email address"
                                                      id="email"
                                                      required
                                                />
                                                <label
                                                      for="email"
                                                      className={
                                                            styles.form_label
                                                      }
                                                >
                                                      Email address
                                                </label>
                                          </div>
                                          <div className={styles.formGroup}>
                                                <label
                                                      className={
                                                            styles.form_label
                                                      }
                                                >
                                                      Where did you hear about
                                                      us
                                                </label>
                                                <select
                                                      name="label"
                                                      value={source}
                                                      onChange={handleChange}
                                                      className={
                                                            styles.form_input
                                                      }
                                                >
                                                      <option value="family">
                                                            Please choose one
                                                      </option>
                                                      <option value="family">
                                                            Friends and Family
                                                      </option>
                                                      <option value="professional">
                                                            Youtube video
                                                      </option>
                                                      <option value="friend">
                                                            Facebook ad
                                                      </option>
                                                      <option value="friend">
                                                            Instagram
                                                      </option>
                                                </select>
                                          </div>

                                          <div className={styles.form_group}>
                                                <button className={styles.btn}>
                                                      Sign up now!
                                                </button>
                                          </div>
                                    </form>
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default Contact;
