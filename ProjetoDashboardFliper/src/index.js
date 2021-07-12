import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/index';
import client from './services/Api';

import { Provider } from 'react-redux';
import { ApolloProvider } from "@apollo/client";


ReactDOM.render(
  <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);