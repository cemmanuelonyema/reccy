import React from 'react';
import styles from './Icon.module.scss';

export const Icon = ({ iconName }) => {
      return (
            <svg className={styles.icon}>
                  <use href={`/icons.svg#icon-${iconName}`}></use>
            </svg>
      );
};
