import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import mainFetch from '../fetchs/mainFetch';
import MyContext from '../context/MyContext';

function Categories({
  type,
  action,
  list,
  callback,
  setLoading,
  toggle,
  toggleCallback,
}) {
  const { setFilterByIng } = useContext(MyContext);
  const MAXIMUM_INDEX = 4;

  const fetchActions = {
    food: 'procuraComida',
    drink: 'procuraBebida',
  };

  const handleCategoryButton = async ({ target }) => {
    setFilterByIng(null);
    setLoading(true);
    const value = target.innerText;
    const result = toggle === value || value === 'All'
      ? await mainFetch(type, fetchActions[type])
      : await mainFetch(type, action, value);
    callback(result);
    setLoading(false);
    const toggleValue = value === toggle ? 'All' : value;
    toggleCallback(toggleValue);
  };

  console.log(toggle);
  return (
    <aside className="categoryContainer">
      <nav className="categoryButtons">
        <Button
          className={
            toggle === 'All'
              ? 'btnCategorias btnClicked'
              : 'btnCategorias'
          }
          data-testid="All-category-filter"
          onClick={ handleCategoryButton }
        >
          All
        </Button>
        {
          list.map((item, index) => index > MAXIMUM_INDEX
          || (
            <Button
              className={
                toggle !== item.strCategory
                  ? 'btnCategorias'
                  : 'btnCategorias btnClicked'
              }
              data-testid={ `${item.strCategory}-category-filter` }
              key={ index }
              onClick={ handleCategoryButton }
            >
              { item.strCategory }
            </Button>
          ))
        }
      </nav>
    </aside>
  );
}

Categories.propTypes = {
  type: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  callback: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  toggle: PropTypes.string.isRequired,
  toggleCallback: PropTypes.func.isRequired,
};

export default Categories;
