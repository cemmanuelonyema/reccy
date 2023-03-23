import {} from 'react';
import styles from './Header.module.scss';
import Nav from '../nav/Nav';
import { SearchForm } from '../../molecules/searchForm/SearchForm';

const Header = () => {
      return (
            <header className={styles.header}>
                  <div className={`${styles.header__container} container`}>
                        <img src="" alt="logo" />
                        <SearchForm />
                        <Nav />
                  </div>
            </header>
      );
};

export default Header;
