import styled from 'styled-components';
import { Section } from './Section';

const SectionStyled = styled(Section)`
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;

  & .section__title {
    margin-bottom: 10px;
  }

  ${props => props.theme.media.tablet} {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  ${props => props.theme.media.desktop} {
    padding-top: 25px;
    padding-bottom: 25px;
  }
`;

export default SectionStyled;
