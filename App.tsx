import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';

// routes
import Layout from 'v1/routes';

// store
import store from 'v1/store';

//styles
import {theme} from 'v1/styles';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
