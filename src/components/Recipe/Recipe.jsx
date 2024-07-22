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
} from './Recipe.styled';

export const Recipe = ({
  item: { name, image, time, servings, calories, difficulty },
}) => {
  return (
    <Container>
      <Image src={image} alt={name} width="240" />
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
          <DifficultyItem $isActive={difficulty === 'easy'} value={difficulty}>
            Easy
          </DifficultyItem>
          <DifficultyItem
            $isActive={difficulty === 'medium'}
            value={difficulty}
          >
            Medium
          </DifficultyItem>
          <DifficultyItem $isActive={difficulty === 'hard'} value={difficulty}>
            Hard
          </DifficultyItem>
        </DifficultyList>
      </>
    </Container>
  );
};
Recipe.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
  }),
};
