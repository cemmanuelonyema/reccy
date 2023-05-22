import React from 'react';
import { BsArrowUp } from 'react-icons/bs';
import styles from './Icon.module.scss';

const ToTop = () => {
      return (
            <a href="#header" className={styles.toTop}>
                  <BsArrowUp size={24} color="#fff" />
            </a>
      );
};

export default ToTop;
