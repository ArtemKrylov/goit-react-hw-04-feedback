import styled from 'styled-components';
import Statistics from './Statistics';

const StatisticsStyled = styled(Statistics)`
  & .statistics__value-name {
    margin-right: 5px;
    font-weight: 500;
  }

  & .statistics__value-number {
    font-style: italic;
  }
`;
export default StatisticsStyled;
