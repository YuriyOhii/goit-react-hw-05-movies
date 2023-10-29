import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { GlobalStyles } from './components/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    grey: '#212121',
    red: 'red',
    orange: 'orange',
  },
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
