import {} from 'react';
import styles from './Header.module.scss';
import Nav from '../nav/Nav';
import { SearchForm } from '../../molecules/searchForm/SearchForm';
import { logo } from '../../../assets';

const Header = () => {
      return (
            <header className={styles.header}>
                  <div className={`${styles.header__container} container`}>
                        <div className={styles.header_logo}>
                              <img src={logo} alt="logo" />
                        </div>
                        <SearchForm />
                        <Nav />
                  </div>
            </header>
      );
};

export default Header;
