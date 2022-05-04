import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';

// routes
import Layout from 'routes';

// store
import store from 'store';

//styles
import {theme} from 'styles';

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
