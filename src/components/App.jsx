import { RecipeList } from './RecipeList/RecipeList';
import initialRecipes from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Component } from 'react';
import { MyForm } from './Form/Form';
import { Filter } from './filter';

export class App extends Component {
  state = {
    recipes: initialRecipes,
    filter: '',
  };

  onDelete = idx => {
    this.setState(prevState => {
      return {
        recipes: prevState.recipes.filter(recipe => recipe.id !== idx),
      };
    });
  };
  onAddCard = item => {
    console.log(item);
    this.setState(prevState => {
      return {
        recipes: [...prevState.recipes, item],
      };
    });
  };
  onFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter, recipes } = this.state;
    //! Не можна записувати відфільтровані карточки у state, напрк, state:[1,2,3,4]
    //! filter: 2 -> [2]
    //! filter: прибрав інпут свій -> [], де весь масив взяти ????
    const normalizedFilter = filter.toLowerCase();
    const visibleCards = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Layout>
        <MyForm onSubmit={this.onAddCard} />
        <Filter filter={filter} onFilterChange={this.onFilterChange} />
        <RecipeList items={visibleCards} onDelete={this.onDelete} />
        <GlobalStyle />
      </Layout>
    );
  }
}
