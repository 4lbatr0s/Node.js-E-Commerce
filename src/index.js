import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider } from 'react-router-dom';
import projectRouter from './routes'; 
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> {/*INFO: How to use Redux in the project*/}
    <RouterProvider router = {projectRouter}/>
  </Provider>
);





