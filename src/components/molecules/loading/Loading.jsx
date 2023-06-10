import React from 'react';
import styles from './Loading.module.scss';

const Loading = () => {
      return (
            <div className={styles.spinner}>
                  <div class="spinner">
                        <svg>
                              <use href="/icons.svg#icon-loader"></use>
                        </svg>
                  </div>
            </div>
      );
};

export default Loading;
