import React from 'react';
import styles from './EmptyState.module.scss';

const EmptyState = () => {
      return (
            <section className={styles.empty}>
                  <div class="message">
                        <div>
                              <svg>
                                    <use href="/icons.svg#icon-smile"></use>
                              </svg>
                        </div>
                        <p>
                              Start by searching for a recipe or an ingredient.
                              Have fun!
                        </p>
                  </div>
            </section>
      );
};

export default EmptyState;
