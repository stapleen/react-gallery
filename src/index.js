import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import App from './App';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

const titles = {
  users: "Список авторов",
  albums: "Альбомы",
  gallery: "Фотографии"
};

export const TitleContext = React.createContext(titles);

ReactDOM.render(
  <Provider store={store}>
    <TitleContext.Provider value={titles}>
      <App />
    </TitleContext.Provider>
  </Provider>,
  document.getElementById('root'),
);
