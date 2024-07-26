import PropTypes from 'prop-types';
import { Recipe } from '../Recipe/Recipe';
import { Item, List } from './RecipeList.styled';

export const RecipeList = ({ items, onDelete }) => {
  return (
    <List>
      {items.map(item => (
        <Item key={item.id}>
          <Recipe item={item} onDelete={onDelete} />
        </Item>
      ))}
    </List>
  );
};

RecipeList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
