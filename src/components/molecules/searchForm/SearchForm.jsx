import React, { useState, useEffect, Fragment, useContext } from 'react';
import { RecipeContext } from '../../../appState/recipe/RecipeProvider';
import { Icon } from '../../atoms/icon/Icon';
import styles from './SearchForm.module.scss';

export const SearchForm = () => {
      //context hook
      const { getSearchRecipes } = useContext(RecipeContext);

      //state hooks
      const [query, setQuery] = useState('');

      //methods
      const handleSubmit = (e) => {
            e.preventDefault();
            setQuery('');
      };

      const handleChange = (e) => {
            const searchQuery = e.target.value;
            setQuery(searchQuery);
            console.log(query);
      };

      //useEffect
      useEffect(() => {
            const timeoutId = setTimeout(() => {
                  if (query) getSearchRecipes(query);
            }, 500);

            return () => {
                  clearTimeout(timeoutId);
            };
      }, [query]);

      return (
            <Fragment>
                  <form className={styles.form} onSubmit={handleSubmit}>
                        <Icon iconName="search" />

                        <input
                              className={styles.form__field}
                              type="text"
                              placeholder="Search recipes"
                              onChange={handleChange}
                              value={query}
                        />

                        <Icon iconName="minus-circle" />
                  </form>
            </Fragment>
      );
};
