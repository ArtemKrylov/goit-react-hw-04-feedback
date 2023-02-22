import styled from 'styled-components';
import { FeedbackOptions } from './FeedbackOptions';

const FeedbackOptionsStyled = styled(FeedbackOptions)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  & .feedBackOptions__button {
    padding: 5px 7px;

    border-radius: ${props => props.theme.borderRadius.standart};
    transition: (
      box-shadow ${props => props.theme.transitionTime}
        ${props => props.theme.cubic}
    );

    &:hover,
    &:focus {
      box-shadow: ${props => props.theme.shadows.boxDark};
    }

    &:active {
      box-shadow: ${props => props.theme.shadows.boxAccent};
    }

    &.good {
      background-color: ${props => props.theme.colors.green};
    }

    &.neutral {
      background-color: ${props => props.theme.colors.grey};
    }

    &.bad {
      background-color: ${props => props.theme.colors.red};
    }
  }

  ${props => props.theme.media.tablet} {
  }
`;

export default FeedbackOptionsStyled;
