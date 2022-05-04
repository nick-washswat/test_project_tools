import React from 'react';
import {ThemeProvider} from 'styled-components';


// routes
import Layout from 'v2/routes';



//styles
import {theme} from 'v2/styles';

const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
  );
};

export default App;
