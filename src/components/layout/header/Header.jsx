import {} from 'react';
import styles from './Header.module.scss';

const Header = () => {
      return (
            <header className={styles.header}>
                  <div className={`${styles.header__container} container`}>
                        <img src="" alt="" />
                        {/* search bar for big screen */}
                  </div>
            </header>
      );
};

export default Header;
