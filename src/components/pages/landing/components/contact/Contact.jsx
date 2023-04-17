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
            <section className="section-book">
                  <div className={`${styles.footer__container} container`}>
                        <div className="book">
                              <div className="book__form">
                                    <form action="#" className="form">
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

                                          <div className="form__group">
                                                <input
                                                      type="text"
                                                      className="form__input"
                                                      placeholder="Full name"
                                                      id="name"
                                                      required
                                                />
                                                <label
                                                      for="name"
                                                      className="form__label"
                                                >
                                                      Full name
                                                </label>
                                          </div>

                                          <div className="form__group">
                                                <input
                                                      type="email"
                                                      className="form__input"
                                                      placeholder="Email address"
                                                      id="email"
                                                      required
                                                />
                                                <label
                                                      for="email"
                                                      className="form__label"
                                                >
                                                      Email address
                                                </label>
                                          </div>
                                          <div className={styles.formGroup}>
                                                <label>
                                                      Where did you hear about
                                                      us
                                                </label>
                                                <select
                                                      name="label"
                                                      value={source}
                                                      onChange={handleChange}
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

                                          <div className="form__group">
                                                <button className="btn btn--green">
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
