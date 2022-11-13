import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider } from 'react-router-dom';
import Routes from './routes'; 
import { Provider } from 'react-redux';
import {store, persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react' //INFO: you should install redux-persist library!

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> {/*INFO: How to use Redux in the project*/}
    <PersistGate loading={null} persistor={persistor}> {/*INFO: persist should become after Provider */}
      <RouterProvider router = {Routes}/>
    </PersistGate>
  </Provider>
);





