import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {appStore,persistor} from './utils/appStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import Favorite from './components/Favorite';
import { PersistGate } from 'redux-persist/integration/react';


const appRouter = createBrowserRouter([
  {
    path:"/",element:<App/>,
    children:[{
      path:"/",
      element:<Body/>,
    },
  {
    path:"/favorite",
    element:<Favorite/>
  }]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={appStore}>
    <PersistGate persistor={persistor}>
   <RouterProvider router={appRouter}/>
   </PersistGate>
    </Provider>
  // </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
