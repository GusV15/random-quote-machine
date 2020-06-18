import React, { useState, useEffect } from 'react';
import './App.css';
import Quote from './components/Quote';
import Button from './components/Button';
import styled from 'styled-components'

function App() {

  var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

  const [quote, setQuote] = useState({
    text: '',
    author: ''
  });
  const [nroQuote, setNroQuote] = useState(0);
  const [result, setResult] = useState({});
  const [color, setColor] = useState({
    previousColor: '',
    currentColor: colors[Math.floor(Math.random() * colors.length)]
    
  });

  const MainStyled = styled.div`
    .app {
      height: 100vh;
      width: 100vw;
      font-family: 'Raleway', sans-serif;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
      background: ${color.currentColor};
      color: ${color.currentColor};
    }
    .container {
      width: 34.375em;
      height: auto;
      padding: 1.5625em;
      background-color: #ffffff;
      text-align: center;
      border-radius: 4px;
    }
  `

  useEffect(() => {
    // Consumir API de Quote y author
    const consultarAPI = async () => {
      const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
      const response = await fetch(url);
      const result = await response.json();
      // Obtengo el resultado de consumir la API
      setResult(result);
      // Actualizar estado
      setQuote({
        text: result.quotes[nroQuote].quote,
        author: result.quotes[nroQuote].author
      });
    }
    consultarAPI();
  }, [nroQuote]);

  const handleClick = () => {
    const valueNroQuote = Math.floor(Math.random() * result.quotes.length);
    const valueNroColor = Math.floor(Math.random() * colors.length);
    setNroQuote(valueNroQuote);
    setColor({
      previousColor: color.currentColor,
      currentColor: colors[valueNroColor]
    });
  }

  return (
    <MainStyled>
      <div className="app">
        <div className="container">
          <Quote quote={quote} color={color} />
          <Button handleClick={handleClick} color={color} quote={quote}/>
        </div>
      </div>
    </MainStyled>
  );
}

export default App;
