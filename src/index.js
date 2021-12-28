import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'components/App';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
