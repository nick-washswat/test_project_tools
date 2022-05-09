import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import store from 'v1/store';
import {QueryClient, QueryClientProvider} from 'react-query';

// routes
import Layout from 'v1/routes';

//styles
import {theme} from 'v1/styles';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Layout />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
