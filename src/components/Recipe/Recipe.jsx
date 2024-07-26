import PropTypes from 'prop-types';

import { BsAlarm } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { IoBarChartOutline } from 'react-icons/io5';
import {
  Image,
  Container,
  RecipeInfo,
  InfoItem,
  Title,
  SubTitle,
  DifficultyList,
  DifficultyItem,
  Buttons,
} from './Recipe.styled';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';

export class Recipe extends Component {
  state = {
    isOpen: false,
  };
  onOpen = () => {
    this.setState({ isOpen: true });
  };
  onClose = () => {
    this.setState({ isOpen: false });
  };
  render() {
    const {
      item: { id, name, image, time, servings, calories, difficulty },
      onDelete,
    } = this.props;
    return (
      <>
        {this.state.isOpen && (
          <Modal
            onClose={this.onClose}
            image={image}
            isOpen={this.state.isOpen}
          />
        )}
        <Container>
          <Image src={image} alt={name} width="240" />
          <Buttons>
            <button type="button" onClick={() => onDelete(id)}>
              Delete
            </button>
            <button type="button" onClick={this.onOpen}>
              Zoom
            </button>
          </Buttons>
          <Title>{name}</Title>

          <RecipeInfo>
            <InfoItem>
              <BsAlarm />
              <span>{time} min</span>
            </InfoItem>
            <InfoItem>
              <AiOutlinePieChart />
              <span>{servings} servings</span>
            </InfoItem>
            <InfoItem>
              <IoBarChartOutline />
              <span>{calories} calories</span>
            </InfoItem>
          </RecipeInfo>
          <>
            <SubTitle>Difficulty</SubTitle>
            <DifficultyList>
              <DifficultyItem
                $isActive={difficulty === 'easy'}
                value={difficulty}
              >
                Easy
              </DifficultyItem>
              <DifficultyItem
                $isActive={difficulty === 'medium'}
                value={difficulty}
              >
                Medium
              </DifficultyItem>
              <DifficultyItem
                $isActive={difficulty === 'hard'}
                value={difficulty}
              >
                Hard
              </DifficultyItem>
            </DifficultyList>
          </>
        </Container>
      </>
    );
  }
}
Recipe.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
  }),
};
