import PropTypes from 'prop-types';
import { Recipe } from '../Recipe/Recipe';
import { Item, List } from './RecipeList.styled';

export const RecipeList = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <Item key={item.id}>
          <Recipe item={item} />
        </Item>
      ))}
    </List>
  );
};

RecipeList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
