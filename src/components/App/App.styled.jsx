import styled from 'styled-components';
import AppComponent from './App';

const App = styled(AppComponent)`
  display: flex;
  flex-direction: column;
  ${props => props.theme.media.tablet} {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
export default App;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-right: 20px;
  padding-left: 20px;
  width: 320px;

  ${props => props.theme.media.tablet} {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }

  ${props => props.theme.media.desktop} {
    width: 1024 px;
  }
`;

export const Section = styled.section`
  padding-top: 15px;
  padding-bottom: 15px;
  ${props => props.theme.media.tablet} {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  ${props => props.theme.media.desktop} {
    padding-top: 25px;
    padding-bottom: 25px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 5px;

  text-align: center;
  font-weight: 900;
`;
