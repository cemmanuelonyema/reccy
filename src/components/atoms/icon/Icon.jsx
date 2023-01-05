import React from 'react';
import styles from './Icon.module.scss';

export const Icon = ({ iconName }) => {
      return (
            <svg className={styles.icon}>
                  {/* <use href="src/img/icons.svg#icon-arrow-right"/> */}
                  <use href={`/icons.svg#icon-${iconName}`}></use>
            </svg>
      );
};
