import './App.css';
import Header from './components/Header'
import Main from './components/Main';

import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext'

import { Container, Row } from 'react-bootstrap';

function App() {
  const { theme } = useContext(ThemeContext)

  return (
      <div className='App' style={{ background : `linear-gradient( to bottom, ${theme.lightBG} 35%, ${theme.backgroundColor} 35% 100%)` }}>
        <Container>
          <Row>
              <Header/>
              <Main/>
          </Row>
        </Container>
      </div>
  );
}

export default App;
