import { styled } from 'styled-components';

export const Container = styled.div`
  position: relative;
  border: 1px solid black;
  border-radius: 4px;
`;
export const Buttons = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
export const Image = styled.img`
  display: block;
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

export const RecipeInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;
export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const Title = styled.h2`
  text-align: center;
`;
export const SubTitle = styled.h3`
  text-align: center;
`;
export const DifficultyList = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;
export const DifficultyItem = styled.span`
  outline: 1px solid green;
  padding: 10px;

  background-color: ${props => {
    if (!props.$isActive) {
      return 'white';
    }
    switch (props.value) {
      case 'easy':
        return 'green';
      case 'medium':
        return 'yellow';
      case 'hard':
        return 'red';
      default:
        return 'white';
    }
  }};
`;
