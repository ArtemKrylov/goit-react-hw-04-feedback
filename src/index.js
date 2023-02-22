import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from 'components/App';
import { theme } from './constants/theme';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App className="feedback-app app" />
    </ThemeProvider>
  </React.StrictMode>
);
